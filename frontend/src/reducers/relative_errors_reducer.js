import {
    RECEIVE_RELATIVE,
    RECEIVE_RELATIVE_ERRORS,
    CLEAR_RELATIVE_ERRORS
} from '../actions/relative_actions';


const _nullErrors = [];

const RelativeErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RELATIVE_ERRORS:
            return action.errors;
        case RECEIVE_RELATIVE:
            return _nullErrors;
        case CLEAR_RELATIVE_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default RelativeErrorsReducer;