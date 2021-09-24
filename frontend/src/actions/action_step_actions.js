import { receivePlan } from './disaster_plan_actions'
import * as APIActionStepUtil from '../util/action_step_util'

export const createActionStep = (planId, actionStep) => (dispatch) =>
APIActionStepUtil.createActionStep(planId, actionStep)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch((err) => console.log(err));

export const updateActionStep = (planId, actionStep) => (dispatch) =>
APIActionStepUtil.updateActionStep(planId, actionStep)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch((err) => console.log(err));

export const deleteActionStep = (planId, stepId) => (dispatch) =>
APIActionStepUtil.deleteActionStep(planId, stepId)
  .then((recPlan) => dispatch(receivePlan(recPlan)))
  .catch((err) => console.log(err));