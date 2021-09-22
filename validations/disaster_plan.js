const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateDisasterPlanInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.disasterType = validText(data.disasterType) ? data.disasterType : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.targetTime)) {
    errors.targetTime = 'Target time field is required';
  }

  if (Validator.isEmpty(data.disasterType)) {
    errors.disasterType = 'Disaster type selection is required.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};