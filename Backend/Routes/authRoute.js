import express from "express";
import { registerUser } from "../Controllers/authController.js";

// router init
const router = express.Router();

// HTTP Methods
router.post("/register", registerUser);
router.post("/login");
router.post("/logout");

// Export
export default router;
