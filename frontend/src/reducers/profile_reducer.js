import {
    RECEIVE_USER_PROFILE,
    REMOVE_USER_PROFILE
} from "../actions/profile_actions";

import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const profileReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state}
    switch(action.type) {
        case RECEIVE_USER_PROFILE:
            if (action.profile) {
                return {...state, [action.profile._id]: action.profile}
            } else {
                return state;
            }
        case REMOVE_USER_PROFILE:
            delete newState[action.profileId]
            return newState;
        case RECEIVE_USER_LOGOUT: 
            return {};
        default:
            return state;
    }
}

export default profileReducer;