const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateRelativeInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.phoneNumber = validText(data.phoneNumber.toString()) ? data.phoneNumber.toString() : '';
  data.age = validText(data.age.toString()) ? data.age.toString() : '';


  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  
  if (!Validator.isLength(data.phoneNumber.toString(), 10, 10)) {
    errors.phoneNumber = "Phone number is not a valid number";
  }
  
  if (Validator.isEmpty(data.phoneNumber.toString())) {
    errors.phoneNumber = "Phone number is required";
  }

  if (Validator.isEmpty(data.age.toString())) {
    errors.age = 'Age field is required';
  }

  if (!Validator.isNumeric(data.age)) {
    errors.age = 'Age is not a valid number';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};