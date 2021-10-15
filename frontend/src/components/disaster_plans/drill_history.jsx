import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchDisasterDrills } from '../../actions/disaster_drill_actions'


class DrillHistory extends React.Component {

    componentDidMount() {
        this.props.fetchDisasterDrills(this.props.planId)
    }

    render() {
        if (!this.props.drills) return null
          
        let showDrills = this.props.drills.sort(
            (a, b) =>
              Date.parse(a.timeToStart.slice(0, 10)) -
              Date.parse(b.timeToStart.slice(0, 10))
          );

        showDrills = showDrills ? this.props.drills.map((drill, i) => {
            if(drill.timeToComplete){
                let date = new Date(drill.timeToStart);
                let dd = String(date.getDate() + 1).padStart(2, "0");
                let mm = String(date.getMonth()).padStart(2, "0");
                let yyyy = date.getFullYear();
                date = new Date(yyyy, mm, dd);
            return (
                <div key={`${i}`} className="drill-hist">
                    <div>Drill Date: {date.toDateString()} </div>
                    <div>Completed In: {drill.timeToComplete} (m/s/ms)</div>
                    <p>Notes: {drill.reviewNote} </p>
                    <br/>
                </div>
            )} else {
                return null;
            }
        }) : null


        return (
            <div className="drill-hist-container">
                <div className="drill-title-container">
                    <h2>Drill History</h2>
                </div>
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