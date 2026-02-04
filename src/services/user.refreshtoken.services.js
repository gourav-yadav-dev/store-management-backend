import message from '../constants/message.js'
// import { responseFailure } from '../utils/response.utils'
import pool from '../config/db.js'
import crypto from 'crypto'
export async function userrefreshtoken(token) {
    const refreshTokenHash = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    const [rows] = await pool.execute(
        `SELECT user_email FROM refresh_tokens
             WHERE token_hash = ? AND expires_at > NOW()`,
        [refreshTokenHash]
    );

    if (rows.length === 0) {
        throw new Error(message.AUTH.REFRESHTOKENMISSING);
    }
    const newAccessToken = jsonwebtoken.sign(
        { email: rows[0].user_email },
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
    );

    return newAccessToken
}