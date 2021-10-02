const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateRelativeInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';


  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isLength(data.phoneNumber.toString(), 10, 10)) {
    errors.phoneNumber = 'Phone number is not a valid number'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};