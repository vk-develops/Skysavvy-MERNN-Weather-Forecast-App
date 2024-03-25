import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../Models/userModel.js";
import generateToken from "../Utils/generateToken.js";
import { isValidEmail } from "../Validation/emailValidation.js";
import {
    Mailgenerator,
    generateOTP,
    mailTransport,
} from "../Utils/accountVerifiactionUtil.js";
import AccountVerification from "../Models/accountVerificationModel.js";

// @desc    Register users & and get a token
// @route   POST /api/v1/users/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Check for all fields
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are neccessary" });
        }

        //Email Validation
        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Registration failed. Invalid email format",
            });
        }

        //Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ success: false, message: "Already a user" });
        }

        //Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Storing the user in the database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        if (user) {
            //Generating a token after registering
            generateToken(res, user._id);

            //Generating OTP
            const OTP = generateOTP();

            //Hashing the OTP
            const hashedOTP = await bcrypt.hash(OTP, 10);

            //Saving the OTP in the account verification mnodel
            const accVerify = new AccountVerification({
                owner: user._id,
                otpToken: hashedOTP,
            });

            //Saving the record
            await accVerify.save();

            //Sending the OTP to user's mail
            let response = {
                body: {
                    name:
                        user.name.charAt(0).toUpperCase() + user.name.slice(1),
                    intro: [
                        `Congrats for being a user of our app. Please verify your account.`,
                        `Your OTP: <strong style="color: #111111;">${OTP}</strong>`,
                    ],
                    outro: "Looking forward to do more business",
                },
            };

            let mail = Mailgenerator.generate(response);

            //Creating the message needed to be sent
            let message = {
                from: process.env.GMAIL_EMAIL_ID,
                to: user.email,
                subject: "Verify your email account",
                html: mail,
            };

            // Sending the mail and handling the response
            mailTransport().sendMail(message, (error, info) => {
                if (error) {
                    console.error("Error occurred while sending email:", error);
                } else {
                    console.log("Email sent successfully:", info.response);
                }
            });

            //Destructuring the user details
            const { password, ...resetofUserDetails } = user._doc;

            //Sending Resopnse
            res.status(200).json({
                success: true,
                message: "User registration sucesss",
                data: resetofUserDetails,
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Login users with a token
// @route   POST /api/v1/users/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        //Check for All fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing fields, enter all fields.",
            });
        }

        //Check for a user
        const user = await User.findOne({ email });

        //Functions if a user
        if (user) {
            //Comparing passswords
            const isPasswordMatch = await bcrypt.compare(
                password,
                user.password
            );
            if (isPasswordMatch) {
                //Generating a user token
                generateToken(res, user._id);

                //Destructuring the user info
                const { _id, name, email } = user;

                //Destructuring the user details
                const { password, ...restOfUserDetails } = user._doc;

                res.status(200).json({
                    success: true,
                    message: "Account login success.",
                    data: restOfUserDetails,
                    userInfo: {
                        _id,
                        name,
                        email,
                    },
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Passwords does not match.",
                });
            }
        } else {
            return res
                .status(400)
                .json({ success: false, message: "User does not exists." });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Logout users and delete token
// @route   POST /api/v1/users/auth/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    try {
        //Removing the cookie
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0),
        });

        //Response
        res.status(200).json({
            success: true,
            message: "Account logout success.",
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

export { registerUser, loginUser, logoutUser };
