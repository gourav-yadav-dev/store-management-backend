const message = require('../constants/message')
const { responseFailure } = require('../utils/response.utils')
module.exports = (req, res, next) => {
    const { email, name, password, otp } = req.body;
    if (!email || !name || !password || !otp) {
        console.log("i am here")
        return res.status(400).json(responseFailure(message.COMMON.VALIDATION_ERROR, 400));
    }
    if (name.length < 4) {
        console.log("i am here1")
        return res.status(400).json(responseFailure(message.USER.INVAILD_NAME, 400));
    }
    if (otp.toString().length < 6) {
        console.log("i am here2")
        return res.status(400).json(responseFailure(message.USER.OTP_FORMAT, 400))
    }
    next()
}