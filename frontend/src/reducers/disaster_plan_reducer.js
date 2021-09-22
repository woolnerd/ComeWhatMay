import {
    RECEIVE_ALL_PLANS,
    RECEIVE_PLAN,
    REMOVE_PLAN
} from "../actions/disaster_plan_actions";


const disasterPlanReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state}
    switch(action.type) {
        case RECEIVE_ALL_PLANS:
            return action.plans.data
        case RECEIVE_PLAN:
            // debugger
            // newState = {...state, [action.relative.data._id]: action.relative.data}
            // return Object.values(newState).filter(element => element._id == action.relative.data._id);
            return {...state, [action.plan.data._id]: action.plan.data}
        case REMOVE_PLAN:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default disasterPlanReducer;