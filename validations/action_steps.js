const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateActionStepInput(data) {
  let errors = {};


  data.owner = validText(data.owner) ? data.owner : '';
  data.task = validText(data.task) ? data.task : '';

  if (Validator.isEmpty(data.owner)) {
    errors.owner = 'Action Owner cannot be blank';
  }

  if (!Validator.isLength(data.owner, {max: 16})) {
    errors.owner = 'Action owner length must be less than 16 chars';
  }

  if (Validator.isEmpty(data.task)) {
    errors.task = 'Task cannot be blank';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};