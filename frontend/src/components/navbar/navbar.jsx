import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.getPlans = this.getPlans.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getPlans() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/plans"}>Disaster Plans</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/new_plan"}>Make a new plan</Link>
          <button onClick={(e)=>this.logoutUser(e)}>Logout</button>
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

  render() {
    return (
      <div>
        <h1>Disaster Plans</h1>
        {this.getPlans()}
      </div>
    );
  }
}

export default NavBar;
