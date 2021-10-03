import {
    RECEIVE_ALL_RELATIVES,
    RECEIVE_RELATIVE,
    REMOVE_RELATIVE
} from "../actions/relative_actions";
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const relativeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state}
    switch(action.type) {
        case RECEIVE_ALL_RELATIVES:
            action.relatives.data.forEach((relative) => {
                newState[relative._id] = relative
            })
            return newState;
        case RECEIVE_RELATIVE:
            return {...state, [action.relative.data._id]: action.relative.data}
        case REMOVE_RELATIVE:
            delete newState[action.relativeId]
            return newState;
        case RECEIVE_USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

export default relativeReducer;