

import { responseFailure, responseSuccess } from '../utils/response.utils.js';
import { verifyEmail } from '../services/user.services.js';
import message from '../constants/message.js';

export const registers = async (req, res) => {
  const { email } = req.body;

  try {
    const sendMail = await verifyEmail({ email });

    if (sendMail === true) {
      return res
        .status(200)
        .json(responseSuccess(message.USER.OTP_SENT, true, 200));
    }
  } catch (error) {
    return res
      .status(400)
      .json(responseFailure(error.message, 400));
  }
};
