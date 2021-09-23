import { connect } from "react-redux";
import DisasterPlanShow from './disaster_plan_show'
import {
    fetchDisasterPlan, 
    updateDisasterPlan,
    deleteDisasterPlan
} from '../../actions/disaster_plan_actions'

const mSTP = (state, ownProps) => ({
    plan: state.entities.plans[ownProps.match.params._id]
})

const mDTP = (dispatch, ownProps) => ({
    fetchDisasterPlan: () => 
        dispatch(fetchDisasterPlan(ownProps.match.params._id)),
    updateDisasterPlan: (plan) => 
        dispatch(updateDisasterPlan(plan)),
    deleteDisasterPlan: () => 
        dispatch(deleteDisasterPlan(ownProps.match.params._id)),

})

export default connect(mSTP, mDTP)(DisasterPlanShow)