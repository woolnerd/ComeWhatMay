import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchDisasterDrills, deleteDisasterDrill } from '../../actions/disaster_drill_actions'
import { withRouter } from 'react-router-dom';
import './actions_steps.css';

class PlanIndex extends React.Component{

    componentDidMount(){
        this.props.fetchDisasterDrills(this.props.planId)
    }

    render(){
        let showDrills = this.props.drills
                                   .sort((a,b) => 
                                   Date.parse(a.timeToStart.slice(0,10)) - 
                                   Date.parse(b.timeToStart.slice(0,10)))

         showDrills = showDrills ? 
                this.props.drills.map((drill, i) => {
                    let date = new Date(drill.timeToStart);
                    let dd = String(date.getDate() + 1).padStart(2, "0");
                    let mm = String(date.getMonth()).padStart(2, "0");
                    let yyyy = date.getFullYear();
                    date = new Date(yyyy, mm, dd)
                    console.log(date)
                    return (
                      <div key={`${i}`} className="single_drill">
                        <div>
                          <div>{date.toDateString()}</div>
                          <button
                            className="drill-btn"
                            onClick={() =>
                              this.props.openModal("startDrill", drill._id)
                            }
                          >
                            Start Drill
                          </button>
                          <button
                            className="drill-btn"
                            onClick={() =>
                              this.props.deleteDisasterDrill(drill._id)
                            }
                          >
                            Delete Drill
                          </button>
                        </div>
                      </div>
                    );
                }) : null
        return(
            <div className="drill-create-box">
                <button className="create-drill" onClick={() => this.props.openModal('createDrill', this.props.planId)}>Create Drill</button>
                {showDrills}

            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    planId: ownProps.match.params.disasterId,
    drill: Object.values(state.entities.drills).filter(
        drill => drill.disPlan === ownProps.match.params.disasterId
    )[0],
    drills: Object.values(state.entities.drills).filter(
        drill => drill.disPlan === ownProps.match.params.disasterId
    )

})

const mDTP = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id)), 
    fetchDisasterDrills: planId => dispatch(fetchDisasterDrills(planId)),
    deleteDisasterDrill: planId => dispatch(deleteDisasterDrill(planId))
})

export default withRouter(connect(mSTP, mDTP)(PlanIndex))

