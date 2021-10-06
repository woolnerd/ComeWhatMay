import React from "react";
import RelativeIndexContainer from "./relative_index";
import DisasterPlansIndexContainer from "../disaster_plans/disaster_plans_index_container";
import "./profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;
  }

  componentDidMount() {
    this.props
      .fetchUserProfile(this.props.currentUserId)
      .then((res) => this.setState({ profile: res }))
  }



  render() {
    if (!this.state.profile) {
      return null;
    }
    const profile = this.props.profile[this.props.profileId];
    const phone = `(${profile.phoneNumber.toString().slice(0, 3)}) 
                    ${profile.phoneNumber.toString().slice(3, 6)}-${profile.phoneNumber.toString().slice(6)}`;

    return (
      <div className="profile-container-main">
        <DisasterPlansIndexContainer />
          <div className="profile-container">
            <div className='profile-info-format'>
              <button
                className="update-profile-btn"
                onClick={() =>
                  this.props.openModal("updateProfile", this.props.profileId)
                }
              >
                Edit Profile
              </button>

              <div className="profile-details">
                <div className='profile-details-field-names'>
                  <h3>
                    Household:
                  </h3>
                  <h3>
                    Email:
                  </h3>
                  <h3>
                    Contact Phone Number:
                  </h3>
                  <h3>
                    Size of Household:
                  </h3>
                </div>
                <div className='profile-details-info'>
                  <h3>
                    <span>{profile.householdName}</span>
                  </h3>
                  <h3>
                    <span>{profile.email}</span>
                  </h3>
                  <h3>
                    <span>{phone}</span>
                  </h3>
                  <h3>
                    <span>{profile.householdSize}</span>
                  </h3>
                </div>
              </div>
              <button
                className="btn-style-1"
                id="profile-btn"
                onClick={() =>
                  this.props.openModal("createRelative", this.props.profileId)}>
                Add Relative
              </button>
            </div>
            <div className="relative-card-frame">
              <RelativeIndexContainer profileId={this.props.profileId} />
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;
