

import { Router } from 'express';

import { registers } from '../controllers/user.controller.js';
import verifyOtpController from '../controllers/userverifyotp.controller.js';

import userValidateMiddleware from '../middleware/validate.middleware.js';
import userotpValidateMiddleWare from '../middleware/userRegisterValidateMiddleWare.js';
import userResetPasswordController from '../controllers/user.resetpass.controller.js'

const router = Router();

router.post('/register', userValidateMiddleware, registers);
router.post('/verifyotp', userotpValidateMiddleWare, verifyOtpController);
router.post('/verifyotpforgetpass', userValidateMiddleware, verifyOtpController)
router.post('/resetpassword', userValidateMiddleware, userResetPasswordController)
// router.post('/forgetpassword', userValidateMiddleware, registers)
// router.post('/forgetpassword', )






export default router;
