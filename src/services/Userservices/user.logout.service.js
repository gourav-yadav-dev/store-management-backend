import crypto from 'crypto'
import pool from '../../config/db.js'
export async function userlogout(token) {
    const hash = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");
    await pool.execute(
        "DELETE FROM refresh_tokens WHERE token_hash = ?",
        [hash]
    );
    res.clearCookie("refreshToken");
    return true;
}