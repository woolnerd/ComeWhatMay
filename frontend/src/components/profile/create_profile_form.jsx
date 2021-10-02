import React from 'react';
import { connect } from 'react-redux';
import { createUserProfile, fetchUserProfile } from '../../actions/profile_actions';
import { Redirect } from "react-router-dom";

import "./profile.css";

class CreateProfileForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          ...this.props.profile,
          email: JSON.parse(localStorage.getItem("userEmail")),
        };

    }

    componentDidMount(){
      this.props.fetchUserProfile(this.props.currentUser.id);
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({user: this.props.currentUser.id})
        this.props
          .createUserProfile(this.state)
    }

    update(field){
        return e => { 
        let value = e.target.value 
        this.setState({[field]: value})
        }
    }

    render(){
      const show = this.props.profileId ? (
        <Redirect to={`/profile/${this.props.profileId._id}`} />
      ) : (
        <div className="create-form-container">
          <form className="create-form" onSubmit={(e) => this.handleSubmit(e)}>
            <label>
              Household Name:
              <input
                onChange={this.update("householdName")}
                type="text"
                value={this.state.householdName}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                onChange={this.update("email")}
                type="text"
                value={this.state.email}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                onChange={this.update("phoneNumber")}
                type="text"
                value={this.state.phoneNumber}
              />
            </label>
            <br />
            <label>
              Household Size:
              <input
                onChange={this.update("householdSize")}
                type="text"
                value={this.state.householdSize}
              />
            </label>
            <button className="login-btn btn-style-1">Create Profile</button>
          </form>
        </div>
      );
        return (
          <div className="profile-container" id="profile-form-container">
            {show}
          </div>
        );
        
    }


}

const mSTP = ({session, entities}) => {
    return {
      currentUser: session.user,
      profile: {
        email: "",
        householdName: "",
        householdSize: "",
        phoneNumber: "",
      },
      profileId: Object.values(entities.profile).filter(profile =>
        profile.user == session.user.id)[0]
    };
}

const mDTP = (dispatch) => {
  return {
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    createUserProfile: (profile)=> dispatch(createUserProfile(profile))
  };
};


export default connect(mSTP, mDTP)(CreateProfileForm)