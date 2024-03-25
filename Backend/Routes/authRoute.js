import express from "express";
import {
    loginUser,
    logoutUser,
    registerUser,
} from "../Controllers/authController.js";
import { protect } from "../Middlewares/authMiddleware.js";

// router init
const router = express.Router();

// HTTP Methods
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);

// Export
export default router;
