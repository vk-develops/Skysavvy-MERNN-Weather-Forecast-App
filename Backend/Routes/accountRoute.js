import express from "express";

// router init
const router = express.Router();

// HTTP Methods for account verification
router.post("/verify");
router.get("/resend-otp");

//HTTP Methods for password reset
router.post("/reset-password");
router.post("/verify-link");

export default router;
