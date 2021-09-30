import React from "react";
import { Link, withRouter } from "react-router-dom";
import CreateProfileFormContainer from "../../components/profile/create_profile_form";
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from "react-icons/fa";



import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.getPlans = this.getPlans.bind(this);
    // this.state = {profileId: null};
    this.logoutUser = this.logoutUser.bind(this)
    this.handleClickHome = this.handleClickHome.bind(this)
    this.profile = undefined;
  }

  componentDidMount(){
    // this.props.fetchUserProfile(this.props.currentUserId.id)
    // .then(res=>this.setState({profile: res}))
  }


  handleClick(e){
      e.preventDefault()
      this.props.fetchUserProfile(this.props.currentUserId.id)
      .then(res => {
        let profileId = res.profile._id
        this.props.history.push(`/profile/${profileId}`)
      })
  }

  handleClickHome(e){
    this.props.history.push(`/`)
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
            {/* <h1>Your Profile</h1> */}
            {/* )} */}
            <div className="logo">
              <img src="https://come-what-may.s3.amazonaws.com/cwm-logo2.png" alt="logo" onClick={(e)=> this.handleClick(e)}/>
            </div>
            <div className="btn-style-1-container">
              <div className="btn-style-1">
                <a href="#" onClick={this.logoutUser}>
                  Logout
                </a>
              </div>
              {/* <div>
                  <AiOutlineHome className="home-btn" onClick={(e)=> this.handleClick(e)}/>
              </div> */}
            </div>
          </div>
        </div>

      );
    } else{
      return (
        <div className="navbar">
          <div className="logo" id="home-logo">
              <img className="logo2" src="https://come-what-may.s3.amazonaws.com/cwm-logo2.png" alt="logo" onClick={(e)=> this.handleClickHome(e)}/>
            </div>
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
