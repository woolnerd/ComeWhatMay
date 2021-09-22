import { combineReducers } from 'redux';

import profile from './profile_reducer';
import relative from './relative_reducer';
import plans from './disaster_plan_reducer'
import drills from './disaster_drill_reducer'


export default combineReducers({
    profile,
    relative,
    plans,
    drills,
})