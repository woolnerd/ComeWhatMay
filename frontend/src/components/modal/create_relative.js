import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from "react-icons/ai"
import { createRelative } from '../../actions/relative_actions';



class CreateRelative extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            profile: this.props.profileId,
            name: '',
            age: '',
            relationship: '',
            phoneNumber: '',
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this);

    }

    handleModal(e){
        e.preventDefault();
        this.props.closeModal();
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createRelative(this.state)
            .then(() => this.props.closeModal())
    }

    render(){
        return (
            <div className="create_relative">
                <div className="relative_header">
                    <h2>Add Household Member</h2>
                    <p className="exit_edit" onClick={this.handleModal}><AiOutlineClose/></p>
                </div>
                <div className="name">
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.handleInput('name')} type="text" />
                </div>
                <div className="age">
                    <label>Age </label>
                    <input value={this.state.age} onChange={this.handleInput('age')} type="text"/>
                </div>
                <div className="Relationship">
                    <label>Relationship</label>
                    <input value={this.state.relationship} onChange={this.handleInput('relationship')}type="text" />
                </div>
                <div className="phone_number">
                    <label>Phone Number</label>
                    <input value={this.state.phoneNumber} onChange={this.handleInput('phoneNumber')} type="text" />
                </div >
                <div className="btn_container">
                    <button className="save_button" onClick={this.handleSubmit}>Add</button>  
                </div>
                       
            </div>
        )
    }
}

const mSTP = state => ({
    profileId: Object.keys(entities.profile)[0]
});

const mDTP = dispatch => ({
    createRelative: relative => dispatch(createRelative(relative)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(CreateRelative);