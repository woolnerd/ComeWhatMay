import * as APIDisasterDrillUtil from '../util/disaster_drill_util'

export const RECEIVE_ALL_DRILLS = 'RECEIVE_ALL_DRILLS'
export const RECEIVE_DRILL = 'RECEIVE_DRILL'
export const REMOVE_DRILL = 'REMOVE_DRILL'

const receiveAllDrills = (drills) => ({
    type: RECEIVE_ALL_DRILLS,
    drills
})

const receiveDrill = (drill) => {
    return {type: RECEIVE_DRILL,
    drill}
}

const removeDrill = (id) => ({
    type: REMOVE_DRILL,
    id
})

export const fetchDisasterDrills = (planId) => (dispatch) =>
APIDisasterDrillUtil.fetchDisasterDrills(planId)
    .then((recDrills) => dispatch(receiveAllDrills(recDrills)))
    .catch((err) => console.log(err));

export const createDisasterDrill = (planId, disasterDrill) => (dispatch) =>
APIDisasterDrillUtil.createDisasterDrill(planId, disasterDrill)
    .then((recDrill) => dispatch(receiveDrill(recDrill)))
    .catch((err) => console.log(err));

export const updateDisasterDrill = (drillId, disasterDrill) => (dispatch) =>
APIDisasterDrillUtil.updateDisasterDrill(drillId, disasterDrill)
    .then((recDrill) => dispatch(receiveDrill(recDrill)))
    .catch((err) => console.log(err));

export const deleteDisasterDrill = (drillId) => (dispatch) =>
APIDisasterDrillUtil.deleteDisasterDrill(drillId)
  .then(() => dispatch(removeDrill(drillId)))
  .catch((err) => console.log(err));