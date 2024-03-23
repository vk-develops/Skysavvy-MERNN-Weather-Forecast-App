import express from "express";

// router init
const router = express.Router();

// HTTP Methods
router.post("/register");
router.post("/login");
router.post("/logout");

// Export
export default router;
