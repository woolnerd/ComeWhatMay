import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.getPlans = this.getPlans.bind(this);
    // this.state = {profileId: null};
    this.logoutUser = this.logoutUser.bind(this)

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
        <div>
          <div>
            <Link to={"/plans"}>Disaster Plans</Link>
          </div>
          <div>
            <div onClick={(e)=>this.handleClick(e)}>
              Profile
            </div>
          </div>
          <div>
             <Link to={`/profile/edit`}>Update Profile</Link>
          </div>
          <div>
             <Link to={"/new-plan"}>Make a new plan</Link>
          </div>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

// componentDidUnmount(){
//   this.setState({currentUserId: null})
// }

  render() {
    return (
      <div>
        <h1>Disaster Plans</h1>
        {this.getPlans()}
      </div>
    );
  }
}

export default withRouter(NavBar);
