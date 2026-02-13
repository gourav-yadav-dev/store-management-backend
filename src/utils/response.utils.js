

// export const responseSuccess = (message, data = null, statuscode = 200, token = null) => ({
//   success: true,
//   message,
//   statuscode,
//   data
//   , token
// });

// export const responseFailure = (message, statuscode = 400) => ({
//   success: false,
//   message,  
//   statuscode
// });


export const responseSuccess = (res, message, data = null, token = null, statuscode = 200) => {
  return res.status(statuscode).json({
    success: true,
    message,
    data,
    token,
    statuscode
  });
};

export const responseFailure = (res, message, statuscode = 400) => {
  return res.status(statuscode).json({
    success: false,
    message,
    statuscode
  });
};

