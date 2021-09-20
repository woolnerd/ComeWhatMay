const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = 'Phone number field is required';
  }

  // if (!Validator.isNumber(data.phoneNumber)) {
  //   errors.phoneNumber = 'Phone number is not a valid number';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};