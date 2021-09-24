import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchDisasterDrills } from '../../actions/disaster_drill_actions'


class DrillHistory extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchDisasterDrills(this.props.planId)
    }

    render() {
        if (!this.props.drills) return null

        const showDrills = this.props.drills ? this.props.drills.map((drill, i) => {
            if(drill.timeToComplete){
                var date = new Date(drill.timeToStart);
            return (
                <div key={`${i}`}>
                    <div>Drill Date: {date.toDateString()} </div>
                    <div>Completed In: {drill.timeToComplete} (m/s/ms)</div>
                    <div>Notes: {drill.reviewNote} </div>
                    <br/>
                </div>
            )}
        }) : null


        return (
            <div>
                <h2>Drill History</h2>
                <br/>
                {showDrills}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        planId: ownProps.match.params.disasterId,
        drills: Object.values(state.entities.drills).filter(
            drill => drill.disPlan === ownProps.match.params.disasterId
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDisasterDrills: planId => dispatch(fetchDisasterDrills(planId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DrillHistory));