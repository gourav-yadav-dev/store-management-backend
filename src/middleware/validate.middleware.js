
import { responseFailure } from '../utils/response.utils.js';
import message from '../constants/message.js';

export default (req, res, next) => {
    const { email, password } = req.body;

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

    // Password validation (only if provided)
    if (password && password.length < 6) {
        return res
            .status(400)
            .json(responseFailure(message.USER.INVALID_SIZE_PASSWORD, 400));
    }

    next();
};
