import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
// import {  }

import NavBar from "./navbar";

const mSTP = ({entities, session}) => {
  debugger

  return ({
    loggedIn: session.isAuthenticated,
    currentUserId: session.user.id,
  })

};

export default connect(mSTP, { logout })(NavBar);
