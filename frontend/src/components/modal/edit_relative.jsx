import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { AiOutlineClose } from 'react-icons/ai'
import { updateRelative } from '../../actions/relative_actions';



class CreateRelative extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: this.props.relative._id,
            profile: this.props.relative.profile,
            name: this.props.relative.name,
            age: this.props.relative.age,
            relationship: this.props.relative.relationship,
            phoneNumber: this.props.relative.phoneNumber,
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
        this.props.updateRelative(this.state)
            .then(() => this.props.closeModal())
    }

    render() {
        return (
            <div className="create_relative">
                <div className="relative_header">
                    <h2>Edit Household Member</h2>
                    <p className="exit_edit" onClick={this.handleModal}><AiOutlineClose /></p>
                </div>
                <div className="name">
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.handleInput('name')} type="text" />
                </div>
                <div className="age">
                    <label>Age </label>
                    <input value={this.state.age} onChange={this.handleInput('age')} type="text" />
                </div>
                <div className="Relationship">
                    <label>Relationship</label>
                    <input value={this.state.relationship} onChange={this.handleInput('relationship')} type="text" />
                </div>
                <div className="phone_number">
                    <label>Phone Number</label>
                    <input value={this.state.phoneNumber} onChange={this.handleInput('phoneNumber')} type="text" />
                </div >
                <div className="btn_container">
                    <button className="save_button" onClick={this.handleSubmit}>Update</button>
                </div>

            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    relativeId: ownProps.profileId,
    relative: state.entities.relative[ownProps.relativeId]
});

const mDTP = dispatch => ({
    updateRelative: relative => dispatch(updateRelative(relative)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(CreateRelative);