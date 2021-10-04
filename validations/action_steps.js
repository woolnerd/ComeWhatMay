const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateActionStepInput(data) {
  let errors = {};


  data.actions.owner = validText(data.actions.owner) ? data.actions.owner : '';
  data.actions.task = validText(data.actions.task) ? data.actions.task : '';

  if (Validator.isEmpty(data.actions.owner)) {
    errors.owner = 'Action Owner cannot be blank';
  }

  if (Validator.isLength(data.actions.owner, {max: 16})) {
    errors.owner = 'Action owner length must be less than 16 chars';
  }

  if (Validator.isEmpty(data.actions.task)) {
    errors.task = 'Task cannot be blank';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};