import { connect } from "react-redux";
import DisasterPlanShow from './disaster_plan_show'
import {
    fetchDisasterPlan, 
    updateDisasterPlan,
    deleteDisasterPlan, 
    clearPlanErrors
} from '../../actions/disaster_plan_actions'

const mSTP = (state, ownProps) => {

    return {
        planId: ownProps.match.params.disasterId,
        plan: state.entities.plans[ownProps.match.params.disasterId],
        errors: Object.values(state.errors.plans),
    }

}

const mDTP = (dispatch, ownProps) => ({
    fetchDisasterPlan: () => 
        dispatch(fetchDisasterPlan(ownProps.match.params.disasterId)),
    updateDisasterPlan: (plan) => 
        dispatch(updateDisasterPlan(plan)),
    deleteDisasterPlan: () => 
        dispatch(deleteDisasterPlan(ownProps.match.params.disasterId)),
    clearPlanErrors: () => dispatch(clearPlanErrors())
        
})

export default connect(mSTP, mDTP)(DisasterPlanShow)