const { responseFailure } = require('../utils/response.utils')
const { verifOtp } = require('../services/verifyuser.services')
module.exports = async (req, res) => {
    try {
        const { email, password, otp, name } = req.body;
        await verifOtp({ email, password, otp, name })

    }

    catch (error) {
        return res.status(400).json(responseFailure(error.message, 400))
    }
}
