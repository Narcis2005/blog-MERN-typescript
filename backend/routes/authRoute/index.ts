import express from 'express';
import { GetUser, Login, Register } from '../../controllers/user';
const router = express.Router();



// @router  POST api/auth/login
// @desc    Login user and return a JWT
// @access  Public
router.post('/login', Login);

// @router  GET api/auth/getuser
// @desc    Check if jwt is valid
// @access  Public
router.get('/getuser', GetUser);

// @router  POST api/auth/register
// @desc    Create a new account
// @access  Public
router.post('/register', Register);


export default router;