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

//Setting up the mailgen environment
const Mailgenerator = new Mailgen({
    theme: "default",
    product: {
        name: "MovieMatic",
        link: "https://vk-develops.vercel.app",
    },
});

const mailTransport = () => {
    //Mail Host
    return nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_EMAIL_ID,
            pass: process.env.GMAIL_EMAIL_PASSWORD,
        },
    });
};

//Exports
export { generateOTP, Mailgenerator, mailTransport };
