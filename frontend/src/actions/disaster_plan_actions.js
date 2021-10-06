import * as APIDisasterPlanUtil from '../util/disaster_plan_util'

export const RECEIVE_ALL_PLANS = 'RECEIVE_ALL_PLANS';
export const RECEIVE_PLAN = 'RECEIVE_PLAN';
export const REMOVE_PLAN = 'REMOVE_PLAN';
export const RECEIVE_PLAN_ERRORS = "RECEIVE_PLAN_ERRORS";
export const CLEAR_PLAN_ERRORS = "CLEAR_PLAN_ERRORS";

export const receiveAllPlans = (plans) =>({
    type: RECEIVE_ALL_PLANS,
    plans
})

export const receivePlan = (plan) =>({
    type: RECEIVE_PLAN,
    plan
})

export const removePlan = (id) =>({
    type: REMOVE_PLAN,
    id
})

export const receivePlanErrors = (errors) => ({
    type: RECEIVE_PLAN_ERRORS,
    errors
});

export const clearPlanErrors = () => ({
    type: CLEAR_PLAN_ERRORS
})

export const fetchDisasterPlan = (disasterId) => (dispatch) =>
APIDisasterPlanUtil.fetchDisasterPlan(disasterId)
    .then((plan) => dispatch(receivePlan(plan)))
    // //.catch((err) => console.log(err));

export const fetchDisasterPlans = (profileId) => (dispatch) =>
APIDisasterPlanUtil.fetchDisasterPlans(profileId)
    .then((plans) => dispatch(receiveAllPlans(plans)))
    //.catch((err) => console.log(err));

export const createDisasterPlan = (profileId, plan) => (dispatch) =>
APIDisasterPlanUtil.createDisasterPlan(profileId, plan)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch(err => {
        dispatch(receivePlanErrors(err.response.data));
    })

export const updateDisasterPlan = (plan) => (dispatch) =>
APIDisasterPlanUtil.updateDisasterPlan(plan)
    .then((recPlan) => dispatch(receivePlan(recPlan)))
    .catch(err => {
        dispatch(receivePlanErrors(err.response.data));
    })

export const deleteDisasterPlan = (id) => (dispatch) =>
APIDisasterPlanUtil.deleteDisasterPlan(id)
  .then(() => dispatch(removePlan(id)))
  //.catch((err) => console.log(err));
