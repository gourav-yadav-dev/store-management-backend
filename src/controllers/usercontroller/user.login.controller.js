// import { responseFailure, responseSuccess } from '../../utils/response.utils.js';
// import { userLogin } from '../../services/Userservices/user.login.services.js';
// import message from '../../constants/message.js'
// export default async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const { accessToken, refreshToken } = await userLogin(email, password);
//         console.log(accessToken)
//         console.log(refreshToken)
//         res.cookie("refreshToken", refreshToken, {
//             httpOnly: true,
//             secure: true,      
//             sameSite: "strict",
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         });
//         return res.status(200).json(responseSuccess(message.AUTH.LOGIN_SUCCESS, null, 200, accessToken))
//     } catch (error) {
//         return res
//             .status(400)
//             .json(responseFailure(error.message, 400));
//     }
// };

import { responseFailure, responseSuccess } from '../../utils/response.utils.js';
import { userLogin } from '../../services/Userservices/user.login.services.js';
import message from '../../constants/message.js';

export default async (req, res) => {
    try {
        const { email, password } = req.body;

        const { accessToken, refreshToken } = await userLogin(email, password);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return responseSuccess(
            res,
            message.AUTH.LOGIN_SUCCESS,
            null,
            200,
            accessToken
        );

    } catch (error) {
        return responseFailure(
            res,
            error.message,
            400
        );
    }
};
