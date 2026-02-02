

import { responseFailure, responseSuccess } from '../utils/response.utils.js';
import { resetPassword } from '../services/user.resetpassword.services.js';
import message from '../constants/message.js'

export default async (req, res) => {
    try {
        const { email, token } = req.body;
        const data = await resetPassword({ email, password, token });

    } catch (error) {
        return res
            .status(400)
            .json(responseFailure(error.message, 400));
    }
};