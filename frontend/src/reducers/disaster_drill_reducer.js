import {
    RECEIVE_ALL_DRILLS,
    RECEIVE_DRILL,
    REMOVE_DRILL
} from "../actions/disaster_drill_actions";


const disasterDrillReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state}
    switch(action.type) {
        case RECEIVE_ALL_DRILLS:
            action.drills.data.forEach((drill) => {
                newState[drill._id] = drill
            })
            return newState
        case RECEIVE_DRILL:
            return {...state, [action.drill.data._id]: action.drill.data}
        case REMOVE_DRILL:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default disasterDrillReducer;