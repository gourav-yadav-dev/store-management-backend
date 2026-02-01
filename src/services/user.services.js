
import pool from '../config/db.js';
import transporter from '../config/mail.js';
import message from '../constants/message.js';

export const verifyEmail = async ({ email }) => {

    console.log("i am here")
    const [existingUser] = await pool.execute(
        'Select user_id from users where email=?', [email])
    if (existingUser.length > 0) {
        console.log("then i am here")
        throw new Error(message.USER.EMAIL_ALREADY_EXISTS)
    }
    if (sendOTP({ email })) {


    }
}


export const sendOTP = async ({ email }) => {

    const sixDigit = Math.floor(100000 + Math.random() * 900000);
    await pool.execute('DELETE FROM email_otps WHERE email=?', [email]);
    await pool.execute(
        'INSERT INTO email_otps (email, secret) VALUES (?, ?)',
        [email, sixDigit]
    );

    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Email Verification OTP',
        text: `Your OTP is ${sixDigit}`
    });

    return true;
};
