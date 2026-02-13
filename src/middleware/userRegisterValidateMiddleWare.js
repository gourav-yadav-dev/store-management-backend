
// import message from '../constants/message.js';
// import { responseFailure } from '../utils/response.utils.js';

// export default (req, res, next) => {
//   const { email, name, password, otp } = req.body;

//   // Required fields check
//   if (!email || !name || !password || !otp) {
//     return res
//       .status(400)
//       .json(responseFailure(message.COMMON.VALIDATION_ERROR, 400));
//   }

//   // Name validation
//   if (name.length < 4) {
//     return res
//       .status(400)
//       .json(responseFailure(message.USER.INVAILD_NAME, 400));
//   }

//   // Password validation
//   if (password.length < 6) {
//     return res
//       .status(400)
//       .json(responseFailure(message.USER.INVALID_SIZE_PASSWORD, 400));
//   }

//   // OTP validation
//   if (otp.toString().length !== 6) {
//     return res
//       .status(400)
//       .json(responseFailure(message.USER.OTP_FORMAT, 400));
//   }

//   next();
// };


import message from '../constants/message.js';
import { responseFailure } from '../utils/response.utils.js';

export default (req, res, next) => {
  const { email, name, password, otp } = req.body;

  // Required fields check
  if (!email || !name || !password || !otp) {
    return responseFailure(res, message.COMMON.VALIDATION_ERROR);
  }

  // Name validation
  if (name.length < 4) {
    return responseFailure(res, message.USER.INVAILD_NAME);
  }

  // Password validation
  if (password.length < 6) {
    return responseFailure(res, message.USER.INVALID_SIZE_PASSWORD);
  }

  // OTP validation
  if (otp.toString().length !== 6) {
    return responseFailure(res, message.USER.OTP_FORMAT);
  }

  next();
};

