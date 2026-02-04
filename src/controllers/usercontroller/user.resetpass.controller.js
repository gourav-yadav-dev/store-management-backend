

import { responseFailure, responseSuccess } from '../../utils/response.utils.js';
import { resetPassword } from '../../services/Userservices/user.resetpassword.services.js';
import message from '../../constants/message.js'

export default async (req, res) => {
    try {
        const { email, token, password } = req.body;
        console.log(email)
        console.log(token)
        console.log(password)

         await resetPassword( email, password, token );
         return res.status(200).json(responseSuccess(message.USER.RESETPASSWORD ,null,200 ,null))

    } catch (error) {
        return res
            .status(400)
            .json(responseFailure(error.message, 400));
    }
};