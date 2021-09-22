import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import DisasterPlans from './disaster_plans_index'
import { fetchDisasterPlans, createDisasterPlan } from '../../actions/disaster_plan_actions'

const mSTP = (state,) =>{
    debugger
    return {
        disasterPlans: Object.values(state.entities.plans), 
    }   
}

const mDTP = (dispatch, ownProps) =>({
    fetchDisasterPlans: () => dispatch(fetchDisasterPlans(ownProps.match.params.profileId)),
    createDisasterPlan: (plan) => dispatch(createDisasterPlan(plan))
})

export default withRouter(connect(mSTP, mDTP)(DisasterPlans))