

export const responseSuccess = (message, data = null, statuscode = 200, token = null) => ({
  success: true,
  message,
  statuscode,
  data
  , token
});

export const responseFailure = (message, statuscode = 400) => ({
  success: false,
  message,  
  statuscode
});
