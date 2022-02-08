import express from "express";
import { contactController } from "../../controllers/contact";

const router = express.Router();

// @router  POST api/contact
// @desc    Send email
// @access  Public
router.post("/", contactController);

export default router;
