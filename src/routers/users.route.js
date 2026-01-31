const express = require('express')
const { registers } = require('../controllers/user.controller');
const userValidateMiddleware = require('../middleware/validate.middleware')
const userotpValidateMiddleWare = require('../middleware/userRegisterValidateMiddleWare')
const verifyOtp = require('../controllers/userverifyotp.controller')
const router = express.Router();
router.post('/register', userValidateMiddleware, registers)
router.post('/verifyotp', userotpValidateMiddleWare, verifyOtp)

module.exports = router;