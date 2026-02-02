
// import pool from '../config/db'
export async function resetPassword(email, password, token) {

    await pool.execute(
        'select email from email_tokens_forgetpassword WHERE email=? && token', [email]
    )
    const [rows] = await pool.execute(
        `SELECT *
         FROM email_tokens_forgetpassword
         WHERE token = ?
           AND email = ?
           AND created_at >= NOW() - INTERVAL 20 MINUTE`,
        [token, email]
    );
    console.log(rows)

}