import React from "react";
import { connect } from "react-redux";
import { updateDisasterDrill, fetchDisasterDrills } from '../../actions/disaster_drill_actions';
import { closeModal } from '../../actions/modal_actions';
import { AiOutlineClose } from 'react-icons/ai'
import '../profile/profile.css';

// import "./profile.css";

class EditDrillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.drill._id,
            disPlan: this.props.drill.disPlan,
            reviewNote: this.props.drill.reviewNote,
            timeToComplete: this.props.drill.timeToComplete,
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchDisasterDrills(this.props.planId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateDisasterDrill(this.props.drillId, this.state)
            .then(() => this.props.closeModal());
    }

    handleModal(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    update(field) {
        return (e) => {
            let value = e.target.value;
            this.setState({ [field]: value });
        };
    }

    render() {
     
        // console.log(this.props.drill._id)
        // console.log(this.props.drill._disPlan)
        return (
          <div className="edit-form">
            <div className="edit-form-header">
              <h2>Submit Drill</h2>
              <p onClick={this.handleModal}>
                <AiOutlineClose className="exit-edit" />
              </p>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>
                Review:
                <textarea
                  onChange={this.update("reviewNote")}
                  value={this.state.reviewNote}
                ></textarea>
              </label>
              <br />
              <label>
                Completed In:
                <input
                  onChange={this.update("timeToComplete")}
                  type="text"
                  value={this.state.timeToComplete}
                />
              </label>

              <button onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        );
    }
}

const mSTP = ({ entities, session }, ownProps) => {
    return {
        drillId: ownProps.drillId,
        currentUser: session.user.id,  
        // drill: entities.drills[ownProps.drillId],
        drill: Object.values(entities.drills).filter(
            drill => drill._id === ownProps.drillId
        )[0]
    };
};

const mDTP = (dispatch) => {
    return {
        updateDisasterDrill: (drillId, disasterDrill) => dispatch(updateDisasterDrill(drillId, disasterDrill)),
        fetchDisasterDrills: (planId) => dispatch(fetchDisasterDrills(planId)),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mSTP, mDTP)(EditDrillForm);
