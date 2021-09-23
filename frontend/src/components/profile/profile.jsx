import React, { Component } from "react";
// import EditProfileFormContainer from "./edit_profile_form";
import RelativeIndexContainer from "./relative_index";
import DisasterPlansIndexContainer from "../disaster_plans/disaster_plans_index_container";
import "./profile.css";
import Stopwatch from '../../components/stopwatch/stopwatch';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;
  }

  componentDidMount() {
    this.props
      .fetchUserProfile(this.props.currentUserId)
      .then((res) => this.setState({ profile: res }));
  }

//         if (!this.state.profile) {
//             return null
//         } 
//         const profile = this.props.profile[this.props.profileId]
//         return (
//           <div>
//             <h3>{profile.email}</h3>
//             <h3>{profile.householdName}</h3>
//             <h3>{profile.householdSize}</h3>
//             <h3>{profile.phoneNumber}</h3>
//             <button onClick={() => this.props.openModal('createRelative', this.props.profileId)}>Test Add Relative</button>
//             <RelativeIndexContainer profileId={this.props.profileId}/>
//             {/* <EditProfileFormContainer /> */}
//           </div>
//         );
  render() {
    if (!this.state.profile) {
      return null;
    }
    const profile = this.props.profile[this.props.profileId];
    return (
      <div className="profile-container-main">
        {/* <div className="dist-plan-container">
        <button className="plan-btn btn-style-1">Make a New Plan</button>
          <div className="dist-plans">
            <div className="plan-item">Plan1</div>
            <div className="plan-item">Plan2</div>
            <div className="plan-item">Plan3</div>
          </div>
        </div> */}
        <DisasterPlansIndexContainer/>
        <div className="profile-container">
          <div className="profile-details">
            <h3>
              Email: <span>{profile.email}</span>
            </h3>
            <h3>
              Household: <span>{profile.householdName}</span>
            </h3>
            <h3>
              Size of Household: <span>{profile.householdSize}</span>
            </h3>
            <h3>
              Contact Phone Number: <span>{profile.phoneNumber}</span>
            </h3>
          </div>
          <button
            className="btn-style-1 profile-btn"
            onClick={() =>
              this.props.openModal("createRelative", this.props.profileId)
            }
          >
            Add Relative
          </button>
          <RelativeIndexContainer profileId={this.props.profileId} />
          {/* <EditProfileFormContainer /> */}
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default Profile;
