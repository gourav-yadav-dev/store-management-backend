const pool = require('../config/db');
const transporter = require('../config/mail');
const message = require('../constants/message');
// const { totp } = require('otplib')
const otplib = require('otplib');
const totp = otplib.
totpconfigure({
    step: 300, // 5 minutes
    digits: 6
  });
  

const verifyEmail = async ({ email }) => {

    console.log("i am here")
    const [existingUser] = await pool.execute(
        'Select user_id from users where email=?', [email])
    if (existingUser.length > 0) {
        console.log("then i am here")
        throw new Error(message.USER.EMAIL_ALREADY_EXISTS)
    }
    if (sendOTP({ email })) {
        return true;
    }
}

const sendOTP = async ({ email }) => {
    // const secret = generateSecret();
    // const otp = await generate({ secret })
    const secret = totp.generateSecret();
    const otp = totp.generate(secret);
    await pool.execute(
        'delete from email_otps where email=?', [email])

    await pool.execute(
        'INSERT INTO email_otps (email, secret) VALUES (?, ?)',
        [email, secret]
    );
    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: "Email Verification OTP",
        text: `Your OTP is ${otp}. It is valid for 5 minutes.`
    })
    return true;
}

module.exports = { verifyEmail }