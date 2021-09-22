import { combineReducers } from 'redux';

import profile from './profile_reducer';
import relative from './relative_reducer';
import disasterPlan from './disaster_plan_reducer'

export default combineReducers({
    profile,
    relative,
    disasterPlan
})