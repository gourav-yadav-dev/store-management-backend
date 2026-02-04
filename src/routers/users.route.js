

import { Router } from 'express';

import { registers } from '../controllers/usercontroller/user.controller.js';
import verifyOtpController from '../controllers/usercontroller/userverifyotp.controller.js';
import userResetPasswordController from '../controllers/usercontroller/user.resetpass.controller.js'
import userLoginController from '../controllers/usercontroller/user.login.controller.js'
import userLogoutController from '../controllers/usercontroller/user.logout.controller.js';
import userRefreshToken from '../controllers/usercontroller/user.resfreshtoken.controller.js'

import userValidateMiddleware from '../middleware/validate.middleware.js';
import userotpValidateMiddleWare from '../middleware/userRegisterValidateMiddleWare.js';

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
