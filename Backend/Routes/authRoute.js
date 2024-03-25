import express from "express";
import { loginUser, registerUser } from "../Controllers/authController.js";

// router init
const router = express.Router();

// HTTP Methods
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout");

// Export
export default router;
