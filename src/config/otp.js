const { authenticator } = require('otplib');

authenticator.options = {
  step: 300,
  digits: 6
};

module.exports = authenticator;
