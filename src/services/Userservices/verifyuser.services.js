
import pool from '../../config/db.js';
import message from '../../constants/message.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const verifyOtp = async ({ email, password = null, otp, name = null, forgetPasswordOtp = false }) => {
    console.log("i am here")
    console.log(forgetPasswordOtp)
    const [rows] = await pool.execute(
        'SELECT secret,created_at FROM email_otps WHERE email=?',
        [email]
    );

    if (!rows || rows.length === 0) {
        throw new Error(message.USER.SECRET_ERROR);
    }

    if (!(otp == rows[0].secret)) {
        throw new Error(message.USER.OTP_INVALID)
    }

    const date = new Date();
    if (!isValidWithin5MinSamePeriod(date, rows[0].created_at)) {
        throw new Error(message.USER.OTP_EXPIRED)
    }

    if (forgetPasswordOtp == true) {
        // const data = generateToken(email)
        const sixDigit = Math.floor(100000 + Math.random() * 900000);
        const hashtoken = await hashPassword(sixDigit)
        await pool.execute('DELETE FROM email_tokens_forgetpassword WHERE email=?', [email]);
        await pool.execute(
            'INSERT INTO email_tokens_forgetpassword (token, email) VALUES(?, ?)', [hashtoken, email]
        )
        return hashtoken
    }
    const chiperPassword = await hashPassword(String(password))

    const [existingUser] = await pool.execute(
        'Select user_id from users where email=?', [email])
    if (existingUser.length > 0) {
        throw new Error(message.USER.EMAIL_ALREADY_EXISTS)
    }
    const [result] = await pool.execute(
        `INSERT INTO users (name, email, password, status)
         VALUES (?, ?, ?, ?)`,
        [name, email, chiperPassword, 'ACTIVE']
    );

    if (result.affectedRows !== 1) {
        throw new Error('User registration failed');
    }


};

export default function isValidWithin5MinSamePeriod(d1, d2) {
    d1 = new Date(d1);
    d2 = new Date(d2);

    if (
        d1.getFullYear() !== d2.getFullYear() ||
        d1.getMonth() !== d2.getMonth() ||
        d1.getDate() !== d2.getDate()
    ) return false;

    if ((d1.getHours() < 12) !== (d2.getHours() < 12)) return false;

    return Math.abs(d2 - d1) <= 5 * 60 * 1000;
}


export async function hashPassword(password) {
    password = password.toString()
    return await bcrypt.hash(password, 10);
}


