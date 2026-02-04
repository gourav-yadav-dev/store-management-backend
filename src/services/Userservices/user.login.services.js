
import pool from '../../config/db.js'
import bcrypt from 'bcrypt'
import message from '../../constants/message.js'
import jsonwebtoken from 'jsonwebtoken'
import crypto from 'crypto'

export async function userLogin(email, password) {
    const [data] = await pool.execute(
        'select email,password,status from users  where email=?', [email])
    if (!data.length) {
        throw new Error(message.USER.USERNOTFOUND)
    }
    if (data[0].status == 'INACTIVE') {
        console.log("inside condition")
        throw new Error(message.USER.USERINACTIVE)
    }
    const verifyPassword = await bcrypt.compare(password, data[0].password)
    if (!verifyPassword) {
        console.log("here")
        throw new Error(message.USER.INVALIDPASSWORD);
    }
    const accessToken = jsonwebtoken.sign(
        { email: data[0].email },
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
    );


    const refreshToken = crypto.randomBytes(64).toString("hex");
    const refreshTokenHash = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");

    await pool.execute(
        `INSERT INTO refresh_tokens (user_email, token_hash, expires_at)
         VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 7 DAY))`,
        [data[0].email, refreshTokenHash]
    );
    return { accessToken, refreshToken };
}



