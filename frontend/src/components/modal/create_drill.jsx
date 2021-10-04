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
            timeToStart: '',
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
        this.props.createDisasterDrill(this.props.planId, this.state)
            .then(() => this.props.closeModal())
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
                    <p className="exit_edit" onClick={this.handleModal}><AiOutlineClose className="close-x" /></p>
                </div>
                <div className="start-drill">
                    <label>Start On:</label>
                    <input value={this.state.timeToStart} onChange={this.handleInput('timeToStart')} type="date" min={date} />
                </div>
                <button className="save-button" onClick={this.handleSubmit}>Save</button>  
            </div>
        )
    }
}

const mSTP = (stat, ownProps) => ({
    planId: ownProps.planId
});

const mDTP = dispatch => ({
    createDisasterDrill: (planId, disasteDrill) => dispatch(createDisasterDrill(planId, disasteDrill)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(CreateDrill);