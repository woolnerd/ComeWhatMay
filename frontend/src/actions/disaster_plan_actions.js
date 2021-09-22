import * as APIDisasterPlanUtil from '../util/disaster_plan_util'

export const RECEIVE_ALL_PLANS = 'RECEIVE_ALL_PLANS';
export const RECEIVE_PLAN = 'RECEIVE_PLAN';
export const REMOVE_PLAN = 'RECEIVE_ALL_PLANS';

const receiveAllPlans = (plans) =>({
    type: RECEIVE_ALL_PLANS,
    plans
})

const receivePlan = (plan) =>({
    type: RECEIVE_PLAN,
    plan
})

const removePlan = (id) =>({
    type: REMOVE_PLAN,
    id
})

export const fetchDisasterPlans = (profileId) => (dispatch) =>
APIDisasterPlanUtil.fetchDisasterPlans(profileId)
    .then((plans) => dispatch(receiveAllPlans(plans)))
    .catch((err) => console.log(err));

export const createDisasterPlan = (profileId, plan) => (dispatch) =>
APIDisasterPlanUtil.createDisasterPlan(profileId, plan)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch((err) => console.log(err));

export const updateDisasterPlan = (plan) => (dispatch) =>
APIDisasterPlanUtil.updateDisasterPlan(plan)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch((err) => console.log(err));

export const deleteDisasterPlan = (id) => (dispatch) =>
APIDisasterPlanUtil.deleteDisasterPlan(id)
  .then(() => dispatch(removePlan(id)))
  .catch((err) => console.log(err));
