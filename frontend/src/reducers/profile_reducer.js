import {
    RECEIVE_USER_PROFILE,
    REMOVE_USER_PROFILE
} from "../actions/profile_actions";


const profileReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    let newState = {...state}
    switch(action.type) {
        case RECEIVE_USER_PROFILE:
            return {...state, [action.profile.data._id]: action.profile.data}
        case REMOVE_USER_PROFILE:
            delete newState[action.profileId]
            return newState;
        default:
            return state;
    }
}

export default profileReducer;