import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchDisasterDrills, deleteDisasterDrill } from '../../actions/disaster_drill_actions'
import { withRouter } from 'react-router-dom';
import './actions_steps.css';

class PlanIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchDisasterDrills(this.props.planId)
    }

    render(){
        console.log(this.props.drill)
        // console.log(this.props.drill._id)
        // const createDrill = !this.props.drill ? <button onClick={() => this.props.openModal('createDrill', this.props.planId)}>Create Drill</button> : <></>
        // const startDrill = !this.props.drill ? <></> : <button onClick={() => this.props.openModal('startDrill', this.props.drill._id)}>Start Drill</button> 
        // const deleteDrill = !this.props.drill ? <></> : <button onClick={() => this.props.deleteDisasterDrill(this.props.drill._id)}>Delete Drill</button> 

        const showDrills = this.props.drills ? 
                this.props.drills.map((drill, i) => {
                    var date = new Date(drill.timeToStart);
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

