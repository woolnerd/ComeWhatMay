import { connect } from "react-redux";
import DisasterPlanShow from './disaster_plan_show'
import {
    fetchDisasterPlan, 
    updateDisasterPlan,
    deleteDisasterPlan
} from '../../actions/disaster_plan_actions'

const mSTP = (state, ownProps) => {
    // debugger
    if (ownProps.location.currentPlan){
        return {plan: ownProps.location.currentPlan.plan}
    } else {
        return {plan: state.entities.plans[ownProps.match.params.disasterId]}
    }
}

const mDTP = (dispatch, ownProps) => ({
    fetchDisasterPlan: () => 
        dispatch(fetchDisasterPlan(ownProps.match.params.disasterId)),
    updateDisasterPlan: (plan) => 
        dispatch(updateDisasterPlan(plan)),
    deleteDisasterPlan: () => 
        dispatch(deleteDisasterPlan(ownProps.match.params.disasterId)),

})

export default connect(mSTP, mDTP)(DisasterPlanShow)