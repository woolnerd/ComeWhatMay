import {
    RECEIVE_USER_PROFILE,
    RECEIVE_PROFILE_ERRORS
} from '../actions/profile_actions';


const _nullErrors = [];

const ProfileErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE_ERRORS:
            return action.errors;
        case RECEIVE_USER_PROFILE:
            return _nullErrors;
        default:
            return state;
    }
};

export default ProfileErrorsReducer;