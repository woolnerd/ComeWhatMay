import React from "react";
import { withRouter } from "react-router-dom";
import Household  from "./household";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      household: "",
      render: false,
    };
    this.getPlans = this.getPlans.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleClickHome = this.handleClickHome.bind(this);
    this.householdRef = React.createRef();
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   if (prevState.household !== "") {
  //     return this.householdRef.current;
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot){
  //   if (snapshot !== null) {
  //     this.setState({household: this.householdRef.current})
  //   }
  // }

  fetchHousehold() {
    setTimeout(
      this.setState({
        household: JSON.parse(localStorage.getItem("userHousehold")),
      }),
      1000
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchUserProfile(this.props.currentUserId.id).then((res) => {
      let profileId = res.profile._id;
      this.props.history.push(`/profile/${profileId}`);
    });
  }

  handleClickHome(e) {
    this.props.history.push(`/`);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userHousehold");
  }

  componentDidMount() {
    this.setState({
      household: JSON.parse(localStorage.getItem("userHousehold")),
    });
  }

  getPlans() {
    if (this.props.loggedIn && this.state.household) {
      return (
        <div className="navbar">
          <div className="flex-container">
            <div className="logo">
              <img
                src="https://come-what-may.s3.amazonaws.com/cwm-logo2.png"
                alt="logo"
                onClick={(e) => this.handleClick(e)}
              />
            </div>
            <label className="btn-style-1-container">
              <button className="btn-style-1" onClick={this.logoutUser}>
                <p>Logout</p>
              </button>
              {/* {localStorage.getItem("userHousehold") ? ( */}
                <div>
                  {/* <Household
                    household={this.state.household}
                    fetchHousehold={() => this.fetchHousehold()}
                  /> */}
                  The {this.state.household} Household
                </div>
                {/* ) : null}  */}
            </label>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <div className="logo" id="home-logo">
            <img
              className="logo2"
              src="https://come-what-may.s3.amazonaws.com/cwm-logo2.png"
              alt="logo"
              onClick={(e) => this.handleClickHome(e)}
            />
          </div>
        </div>
      );
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.household !== this.state.household) {
  //     console.log(prevState)
  //     console.log(this.state.household)
  //     this.setState({
  //       household: JSON.parse(localStorage.getItem("userHousehold")),
  //     });
  //   }
  // }

  render() {
    return <div>{this.getPlans()}</div>;
  }
}

export default withRouter(NavBar);
