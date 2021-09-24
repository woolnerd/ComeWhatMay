const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateDisasterDrillInput(data) {
  let errors = {};

  data.reviewNote = validText(data.reviewNote) ? data.reviewNote : '';

  // if (!Validator.isNumeric(data.timeToComplete)) {
  //   errors.phoneNumber = 'Date is not a valid number';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};