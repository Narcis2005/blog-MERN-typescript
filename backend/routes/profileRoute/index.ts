import express from 'express';
import { updateProfile } from '../../profile';
import check from '../../src/middleware/tokenCheck';
const router = express.Router();


// @router  PUT api/auth/update-profile
// @desc    Update user info
// @access  Private
router.put('/update-profile', check, updateProfile)

export default router;