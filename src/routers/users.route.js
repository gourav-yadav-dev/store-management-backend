

import { Router } from 'express';

import { registers } from '../controllers/user.controller.js';
import verifyOtpController from '../controllers/userverifyotp.controller.js';

import userValidateMiddleware from '../middleware/validate.middleware.js';
import userotpValidateMiddleWare from '../middleware/userRegisterValidateMiddleWare.js';

const router = Router();

router.post('/register', userValidateMiddleware, registers);
router.post('/verifyotp', userotpValidateMiddleWare, verifyOtpController);
router.post('/forgetpasswordotp', userValidateMiddleware, verifyOtpController)
// router.post('/forgetpassword', userValidateMiddleware, registers)
// router.post('/forgetpassword', )






export default router;
