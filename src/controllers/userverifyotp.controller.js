



import { responseFailure,responseSuccess } from '../utils/response.utils.js';
import { verifyOtp } from '../services/verifyuser.services.js';
import message from '../constants/message.js'

export default async (req, res) => {
    try {
        const { email, password, otp, name } = req.body;
        // console.log(req.forgetPasswordOtp)
        const forgetPasswordOtp=req.forgetPasswordOtp

        await verifyOtp({ email, password, otp, name,forgetPasswordOtp });

        return res.status(200).json(responseSuccess(message.USER.OTP_VERIFIED,null,200));
    } catch (error) {
        return res
            .status(400)
            .json(responseFailure(error.message, 400));
    }
};
