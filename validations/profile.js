const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';
  data.phoneNumber = validText(data.phoneNumber.toString()) ? data.phoneNumber.toString() : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.householdName)) {
    errors.email = 'Household Name field is required';
  }

  if (Validator.isEmpty(data.phoneNumber.toString())) {
    errors.phoneNumber = 'Phone number field is required';
  }

  if (!Validator.isNumeric(data.phoneNumber)) {
    errors.phoneNumber = 'Phone number is not a valid number';
  }

  if (!Validator.isLength(data.phoneNumber.toString(), 10, 10)){
    errors.phoneNumber = 'Phone number is not a valid number'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};