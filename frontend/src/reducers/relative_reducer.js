import {
    RECEIVE_ALL_RELATIVES,
    RECEIVE_RELATIVE,
    REMOVE_RELATIVE
} from "../actions/relative_actions";


const relativeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state}
    switch(action.type) {
        case RECEIVE_ALL_RELATIVES:
            action.relatives.data.forEach((relative) => {
                newState[relative._id] = relative
            })
            return newState;
            // return action.relatives.data
        case RECEIVE_RELATIVE:
            // debugger
            // newState = {...state, [action.relative.data._id]: action.relative.data}
            // return Object.values(newState).filter(element => element._id == action.relative.data._id);
            return {...state, [action.relative.data._id]: action.relative.data}
        case REMOVE_RELATIVE:
            delete newState[action.relativeId]
            return newState;
        default:
            return state;
    }
}

export default relativeReducer;