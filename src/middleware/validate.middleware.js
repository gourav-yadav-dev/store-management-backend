
import { responseFailure } from '../utils/response.utils.js';
import message from '../constants/message.js';

export default (req, res, next) => {

    if (req.url == 'auth/refreshtoken' || req.url == 'auth/logout') {
        const refreshToken = req.cookie.refreshToken;
        if (!refreshToken) {
            return res.status(400).json(responseFailure(message.AUTH.REFRESHTOKENMISSING, 400));
        }
    }
    else {
        const { email } = req.body;
        if (!email) {
            return res
                .status(400)
                .json(responseFailure(message.AUTH.INVALID_CREDENTIALS, 400));
        }
        if (req.url == '/login') {
            console.log(req.url)
            const { password } = req.body;
            if (!password) {
                return res
                    .status(400)
                    .json(responseFailure(message.USER.PASSWORD_REQUIRED, 400));

            }
            if (password.length < 6) {
                return res
                    .status(400)
                    .json(responseFailure(message.USER.INVALID_SIZE_PASSWORD, 400));
            }
        }

        if (req.url == '/resetpassword') {
            const { password, token, email } = req.body;
            if (!password) {
                return res
                    .status(400)
                    .json(responseFailure(message.USER.PASSWORD_REQUIRED, 400));
            }
            if (!token) {
                return res
                    .status(400)
                    .json(responseFailure(message.USER.RESENDOTPFORRESETPASSWORD, 400));
            }

            if (password.length < 6) {
                return res
                    .status(400)
                    .json(responseFailure(message.USER.INVALID_SIZE_PASSWORD, 400));
            }

        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res
                .status(400)
                .json(responseFailure(message.USER.INVALID_EMAIL, 400));
        }

        if (req.url == '/verifyotpforgetpass') {
            console.log("dsfgfjhgjfd")
            req.forgetPasswordOtp = true;
        }
    }
    next();
};
