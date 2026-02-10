
const message = {
  USER: {
    REGISTER_SUCCESS: 'OTP sent to your email',
    EMAIL_ALREADY_EXISTS: 'Email already registered',
    INVALID_EMAIL: 'Invalid email format',
    OTP_SENT: 'OTP sent successfully',
    OTP_VERIFIED: 'OTP verified successfully',
    RESETPASSWORD: "Reset password Successfully",
    RESENDOTP: "Please Resend OTP",
    OTP_EXPIRED: 'OTP has expired',
    OTP_INVALID: 'Invalid OTP',
    OTP_FORMAT: 'Please enter six digit otp',
    INVALID_SIZE_PASSWORD: 'Password must be at least 6 character',
    RESENDOTPFORRESETPASSWORD: "Please resend OTP and verify again",
    PASSWORD_REQUIRED: "password Required",
    INVAILD_NAME: 'Name must be at least 4 character',
    SECRET_ERROR: 'Please register again',
    USERINACTIVE: "User is inactive",
    USERNOTFOUND: "User is not Register",
    INVALIDPASSWORD: "Password is Wrong",
    VERIFYED: "Verify",
    VERIFYCATEGORY: "Please Give Category",
    LENGTHCATEGORY: "Cateogry length should minimum 4 character",
    LOGINAGAIN: "Please Login Again",
    CATEGORYALREADY: "Category already available",


    ADDCATEGORY: "Add Category Successfullu...",
    CATEGORYNOTPRESENT: "Category is not available"
    ,
    SUCCESSFULLY: "Successfully sent data"
  },

  AUTH: {
    REFRESHTOKENMISSING: "Refresh Token is missing please login again",
    LOGIN_SUCCESS: 'Login successful',
    LOGOUT: "Logout successfully...",
    USERREGISTER: "User Register Sucessfully",
    INVALID_CREDENTIALS: 'Invalid email or password',
    UNAUTHORIZED: 'Unauthorized access'
  },

  COMMON: {
    SERVER_ERROR: 'Something went wrong',
    VALIDATION_ERROR: 'Invalid request data'
  }
};

export default message;
