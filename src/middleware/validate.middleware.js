
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

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res
            .status(400)
            .json(responseFailure(message.USER.INVALID_EMAIL, 400));
    }
    if (req.url == '/forgetpasswordotp') {
        req.forgetPasswordOtp = true;
    }
    next();
};
