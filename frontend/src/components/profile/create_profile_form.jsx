import React from 'react';
import { connect } from 'react-redux';
import { createUserProfile, fetchUserProfile } from '../../actions/profile_actions';
import { Redirect } from "react-router-dom";

import "./profile.css";

class CreateProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.profile,
      // email: JSON.parse(localStorage.getItem("userEmail")),
    };
    this.renderErrors = this.renderErrors.bind(this);
    debugger
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  componentDidMount() {
    // this.props.fetchUserProfile(this.props.currentUser.id);
    this.setState({ email: JSON.parse(localStorage.getItem("userEmail"))});
  }

  renderErrors() {
    return (
      <ul className="errors" id="create-profile-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li id="create-profile-error" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ user: this.props.currentUser.id });
    this.props.createUserProfile(this.state);
    // localStorage.setItem(
    // "userHousehold",
    // JSON.stringify(this.state.householdName))
  }

  update(field) {
    return (e) => {
      let value = e.target.value;
      this.setState({ [field]: value });
    };
  }

  render() {
    const show = this.props.profileId !== undefined ? (
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
              id="household-size-input"
              onChange={this.update("householdSize")}
              type="number"
              value={this.state.householdSize}
              min="1"
            />
          </label>
          <button className="login-btn btn-style-1">Create Profile</button>
          <div className="error-container">{this.renderErrors()}</div>
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

const mSTP = (state) => {
    return {
      currentUser: state.session.user,
      profile: {
        email: "",
        householdName: "",
        householdSize: 1,
        phoneNumber: "",
        errors: {}
      },
      errors: state.errors.profile,
      profileId: Object.values(state.entities.profile).filter(profile =>
        profile.user == state.session.user.id)[0]
    };
}

const mDTP = (dispatch) => {
  return {
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    createUserProfile: (profile)=> dispatch(createUserProfile(profile))
  };
};


export default connect(mSTP, mDTP)(CreateProfileForm)