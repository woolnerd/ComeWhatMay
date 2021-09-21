import { combineReducers } from 'redux';

import profile from './profile_reducer';
import relative from './relative_reducer'

export default combineReducers({
    profile,
    relative
})