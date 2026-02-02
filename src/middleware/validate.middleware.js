
import { responseFailure } from '../utils/response.utils.js';
import message from '../constants/message.js';

export default (req, res, next) => {
    const { email } = req.body;
    console.log(req.url)
    console.log(email)
    // Email required
    if (!email) {
        return res
            .status(400)
            .json(responseFailure(message.AUTH.INVALID_CREDENTIALS, 400));
    }

    if (req.url == '/resetpassword') {
        const { password, token, email } = req.body;
        if (!password) {

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
        req.forgetPasswordOtp = true;
    }
    next();
};
