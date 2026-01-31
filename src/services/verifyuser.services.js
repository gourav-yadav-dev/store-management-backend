const message = require('../constants/message')
const { verify } = require('otplib');
const pool = require('../config/db')

async function verifOtp({ email, password, name, otp }) {
    console.log(otp)
    const [existingSecret] = await pool.execute(
        'Select secret from email_otps where email=?', [email])
    if (!existingSecret || existingSecret.length == 0) {
        throw new Error(message.USER.SECRET_ERROR)
    }
    const secret = existingSecret[0].secret


    let token = otp.toString()
   
    const isValid = await verify({ token, secret,  })
    console.log(isValid)
    





}


module.exports = { verifOtp }