
// import message from "../../constants/message.js";
// import { userlogout } from "../../services/Userservices/user.logout.service.js";
// import { responseSuccess, responseFailure } from "../../utils/response.utils.js";
// export default async (req, res) => {
//     try {
//         await userlogout(req.cookie.refreshToken)
//         return res.status(200).json(responseSuccess(message.AUTH.LOGOUT,null,200,null))
//     }
//     catch (error) {
//         return res
//             .status(400)
//             .json(responseFailure(error.message, 400));
//     }

// }
import message from "../../constants/message.js";
import { userlogout } from "../../services/Userservices/user.logout.service.js";
import { responseSuccess, responseFailure } from "../../utils/response.utils.js";

export default async (req, res) => {
    try {

        const refreshToken = req.cookies?.refreshToken;

        await userlogout(refreshToken);

        return responseSuccess(
            res,
            message.AUTH.LOGOUT
        );

    } catch (error) {
        return responseFailure(
            res,
            error.message
        );
    }
};
