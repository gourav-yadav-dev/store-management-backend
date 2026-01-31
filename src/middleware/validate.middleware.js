const {responseFailure } = require('../utils/response.utils');
const  message  = require('../constants/message.js')
module.exports = (req, res, next) => {
    const { email,password}  = req.body;
    if (!email) {
        return res.status(400).json(responseFailure(message.AUTH.INVALID_CREDENTIALS, 400))
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
        return res.status(400).json(responseFailure(message.USER.INVALID_EMAIL,400))
    }

    if(password.length<6)
    {
        return res.status(400).json(responseFailure(message.USER.INVALID_EMAIL,400))
    }
    next()
}