import otpGenerator from "otp-generator";

const generateOTP = () => {
    //Generating OTP
    const OTP = otpGenerator.generate(6, {
        specialChars: false,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
    });

    //Sending OTP
    return OTP;
};

//Exports
export { generateOTP };
