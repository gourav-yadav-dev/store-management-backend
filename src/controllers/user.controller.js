
const { responseFailure, responseSuccess } = require('../utils/response.utils');
const { verifyEmail } = require('../services/user.services')
const message = require('../constants/message')

exports.registers = async (req, res) => {
    const { email } = req.body
    try {
        const sendMail = await verifyEmail({ email })
        if (sendMail == true) {
            res.status(200).json(responseSuccess(message.USER.OTP_SENT, true, 200))
        }
    }
    catch (error) {
        return res.status(400).json(responseFailure(error.message, 400))
    }
}
