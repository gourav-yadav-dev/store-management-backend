
import pool from '../config/db.js';
import message from '../constants/message.js';
export const verifyOtp = async ({ email, otp }) => {
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

};

function isValidWithin5MinSamePeriod(d1, d2) {
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
