



import { responseFailure } from '../utils/response.utils.js';
import { verifyOtp } from '../services/verifyuser.services.js';

export default async (req, res) => {
    try {
        const { email, password, otp, name } = req.body;

        await verifyOtp({ email, password, otp, name });

        return res.status(200).json({
            success: true,
            message: 'OTP verified successfully'
        });
    } catch (error) {
        return res
            .status(400)
            .json(responseFailure(error.message, 400));
    }
};
