

import { Router } from 'express';

import { registers } from '../controllers/user.controller.js';
import verifyOtpController from '../controllers/userverifyotp.controller.js';
import userResetPasswordController from '../controllers/user.resetpass.controller.js'
import userLoginController from '../controllers/user.login.controller.js'
import userLogoutController from '../controllers/user.logout.controller.js';

import userValidateMiddleware from '../middleware/validate.middleware.js';
import userotpValidateMiddleWare from '../middleware/userRegisterValidateMiddleWare.js';
import userRefreshToken from '../controllers/user.resfreshtoken.controller.js'

const router = Router();

router.post('/register', userValidateMiddleware, registers);
router.post('/verifyotp', userotpValidateMiddleWare, verifyOtpController);
router.post('/verifyotpforgetpass', userValidateMiddleware, verifyOtpController)
router.post('/resetpassword', userValidateMiddleware, userResetPasswordController)

router.post('/login', userValidateMiddleware, userLoginController)
router.post('auth/refreshtoken', userValidateMiddleware, userRefreshToken)

router.post('auth/logout', userValidateMiddleware, userLogoutController)

// router.post('/forgetpassword', userValidateMiddleware, registers)
// router.post('/forgetpassword', )

export default router;
