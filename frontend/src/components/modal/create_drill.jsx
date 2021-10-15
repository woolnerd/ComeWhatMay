import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { AiOutlineClose } from 'react-icons/ai'
import { createDisasterDrill } from '../../actions/disaster_drill_actions';




class CreateDrill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disPlan: this.props.planId,
            timeToStart: new Date(),
            showError: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this);

    }

    handleModal(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let d = new Date();
        d = Date.parse(d.toISOString().slice(0, 10))
        d <= Date.parse(this.state.timeToStart) ?
        this.props.createDisasterDrill(this.props.planId, this.state)
            .then(() => this.props.closeModal())
            .then(this.setState({showError: false}))
        : this.setState({showError: true})
    }

    render() {
        let date = new Date();
        let dd = String(date.getDate()).padStart(2, "0");
        let mm = String(date.getMonth() + 1).padStart(2, "0");
        let yyyy = date.getFullYear();
        date = yyyy + "-" + mm + "-" + dd;
  
        return (
          <div className="create-relative">
            <div className="relative-header">
              <h2>Add Drill</h2>
              <p className="exit_edit" onClick={this.handleModal}>
                <AiOutlineClose className="close-x" />
              </p>
            </div>
            <div className="start-drill">
              <label>Start On:</label>
              <input
                // defaultValue={this.state.timeToStart}
                // defaultValue={date}
                onChange={this.handleInput("timeToStart")}
                type="date"
                min={date}
                // onKeyDown={(e) => e.preventDefault()}
              />
            </div>
            <button className="save-button" onClick={this.handleSubmit}>
              Save
            </button>
            <div className="error-container">
              <p className={`date-error ${this.state.showError ? "" : "hide"}`}>
                Date cannot be in the past
              </p>
            </div>
          </div>
        );
    }
}

const mSTP = (state, ownProps) => ({
    planId: ownProps.planId
    
});

const mDTP = dispatch => ({
    createDisasterDrill: (planId, disasteDrill) => dispatch(createDisasterDrill(planId, disasteDrill)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(CreateDrill);