import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            req.user = await User.findById(decoded.userId).select("-password");

            next();
        } catch (error) {
            console.error(error);
            return res.status(401).json({
                success: false,
                message: "Not authorized, token failed",
            });
        }
    } else {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token failed",
        });
    }
});

//Export
export { protect };
