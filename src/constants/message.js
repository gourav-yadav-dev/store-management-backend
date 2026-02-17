
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
    CATEGORY: "please provide the category",
    EDITCATEGORY: "Edit Successfully...",
    ADDCATEGORY: "Add Category Successfully...",
    CATEGORYNOTPRESENT: "Category is not available",
    ADDPRODUCT:"Add product succssfully..."
    ,
    SUCCESSFULLY: "Successfully sent data",
    DELETECATEGORY: "Delete Category Successfully...",
    PRODUCTEMPTY: "Product name is Empty ",
    PRODUCTLENGTH: "Product length should be greater than 3 char"

  },

  AUTH: {
    REFRESHTOKENMISSING: "Refresh Token is missing please login again",
    LOGIN_SUCCESS: 'Login successful',
    LOGOUT: "Logout successfully...",
    USERREGISTER: "User Register Sucessfully",
    INVALID_CREDENTIALS: 'Invalid email or password',
    INVALIDEMAIL: "Please provide Email",
    UNAUTHORIZED: 'Unauthorized access'
  },

  COMMON: {
    SERVER_ERROR: 'Something went wrong',
    VALIDATION_ERROR: 'Invalid request data'
  },

  PRODUCT:{
    PRODUCTALREADY:"Product is already Available",
    PRODUCTNO:"Product is not Available",
    PRODUCTSUCCESSFULLY:"Product Sent Succesfully...",
    UPDATEPRODUCT:"Update product Successfully...",
    DELETEPRODUCT:"Delete Product Successfully...",
    
  }
};

export default message;
