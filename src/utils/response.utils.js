

export const responseSuccess = (message, data = null, statuscode = 200) => ({
    success: true,
    message,
    statuscode,
    data
  });
  
  export const responseFailure = (message, statuscode = 400) => ({
    success: false,
    message,
    statuscode
  });
  