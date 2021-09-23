import React from "react";
import { Link, withRouter } from "react-router-dom";
import CreateProfileFormContainer from "../../components/profile/create_profile_form";

import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpem: false
    }
    this.getPlans = this.getPlans.bind(this);
    // this.state = {profileId: null};
    this.logoutUser = this.logoutUser.bind(this)
    this.profile = undefined;
  }

  componentDidMount(){
    // this.props.fetchUserProfile(this.props.currentUserId.id)
    // .then(res=>this.setState({profile: res}))
  }


  handleClick(e){

    // e.preventDefault()
    // this.props.fetchUserProfile(this.props.currentUserId.id)
    // .then(res=>this.setState({profileId: res.profile._id}))
    // .then(this.props.history.push(`/profile/${this.state.profileId}`))
    // .then(this.setState({}))
    // console.log(this.props)

      e.preventDefault()
      this.props.fetchUserProfile(this.props.currentUserId.id)
      .then(res => {
        let profileId = res.profile._id
        this.props.history.push(`/profile/${profileId}`)
      })
    //   .then(this.props.history.push(`/profile/${this.state.profileId}`))
    //   .then(this.setState({}))
    // console.log(this.props)

  }


  logoutUser(e) {
    e.preventDefault();
    this.props.logout()
  }

  getPlans() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar">
          <div className="flex-container">
            {/* {this.state.profile ? (
              <h1> The {this.state.profile.householdName} Household Profile</h1>
            ) : ( */}
              <h1>Your Profile</h1>
            {/* )} */}
            <div className="btn-style-1-container">
              <div className="btn-style-1">
                <a href="#" onClick={this.logoutUser}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <Link to={"/signup"} className="btn-style-1">
            Signup
          </Link>
          <Link to={"/login"} className="btn-style-1">
            Login
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.getPlans()}
      </div>
    );
  }
}

export default withRouter(NavBar);
