exports.responseSuccess = (message, data = null, statuscode) => ({
    success: true,
    message: message,
    statuscode: statuscode,
    data: data
})
exports.responseFailure = (message, statuscode) => ({
    success: true,
    message: message,
    statuscode: statuscode
})