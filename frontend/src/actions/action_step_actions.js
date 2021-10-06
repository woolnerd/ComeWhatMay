import { receivePlan } from './disaster_plan_actions'
import * as APIActionStepUtil from '../util/action_step_util'

export const RECEIVE_ACTION_STEP_ERRORS = "RECEIVE_ACTION_STEP_ERRORS"
export const CLEAR_ACTION_STEP_ERRORS = "CLEAR_ACTION_STEP_ERRORS"

export const receiveActionStepErrors = (errors) => ({
    type: RECEIVE_ACTION_STEP_ERRORS,
    errors
});

export const clearActionStepErrors = () => ({
    type: CLEAR_ACTION_STEP_ERRORS,
});

export const createActionStep = (planId, actionStep) => (dispatch) =>
APIActionStepUtil.createActionStep(planId, actionStep)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch(
        (err) => dispatch(receiveActionStepErrors(err.response.data))
    );

export const updateActionStep = (planId, actionStep) => (dispatch) =>
APIActionStepUtil.updateActionStep(planId, actionStep)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch(
        (err) => dispatch(receiveActionStepErrors(err.response.data))
    );

export const deleteActionStep = (planId, stepId) => (dispatch) =>
APIActionStepUtil.deleteActionStep(planId, stepId)
  .then((recPlan) => dispatch(receivePlan(recPlan)))
  .catch((err) => console.log(err));