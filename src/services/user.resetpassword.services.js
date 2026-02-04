
import pool from '../config/db.js';
import isValidWithin5MinSamePeriod, { hashPassword } from './verifyuser.services.js'
import message from '../constants/message.js'
export async function resetPassword(email, password, token) {
    console.log("inserivce")
    console.log(email)
    console.log("inservice")

    console.log(token)
    console.log("inservice")
    const [rows] = await pool.execute(
        `SELECT *
         FROM email_tokens_forgetpassword
         WHERE token = ?
           AND email = ? `,
        [token, email]
    );
    console.log("here")
    console.log(rows)
    console.log("here")

    if (rows.length == 0) {
        throw new Error(message.USER.RESENDOTP)
    }
    console.log(rows[0].created_at)
    const date = new Date();
    // const result = isValidWithin5MinSamePeriod(date, rows[0].created_at)
    const result = true;
    if (!result) {
        throw new Error(message.USER.RESENDOTP)
    }
    const hashPasswordChiper = await hashPassword(password)

    const [updatePassword] = await pool.execute(
        'UPDATE users SET password = ? WHERE email = ?',
        [hashPasswordChiper, email]
    );
    if (updatePassword.affectedRows === 0) {
        throw new Error('User not found with this email');
    }

}


