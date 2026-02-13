// // import {userrefreshtoken } from '../../services/Userservices/user.refreshtoken.services.js'
// import {userrefreshtoken } from '../../services/Userservices/user.refreshtoken.services.js'

// import message from '../../constants/message.js'
// import { responseFailure, responseSuccess } from '../../utils/response.utils.js'
// export default async (req, res) => {
//     try {
//         const newAccessToken = await userrefreshtoken(req.cookie.refreshToken)
//         return res.status(200).json(responseSuccess(message.USER.VERIFYED, null, 200, newAccessToken))
//     }
//     catch (error) {
//         return res
//             .status(400)
//             .json(responseFailure(error.message, 400));
//     }
// } 

import { userrefreshtoken } from '../../services/Userservices/user.refreshtoken.services.js';
import message from '../../constants/message.js';
import { responseFailure, responseSuccess } from '../../utils/response.utils.js';

export default async (req, res) => {
    try {

        const refreshToken = req.cookies?.refreshToken;

        const newAccessToken = await userrefreshtoken(refreshToken);

        return responseSuccess(
            res,
            message.USER.VERIFYED,
            null,
            200,
            newAccessToken
        );

    } catch (error) {
        return responseFailure(
            res,
            error.message
        );
    }
};
