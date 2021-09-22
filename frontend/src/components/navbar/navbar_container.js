import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mSTP = ({session}) => ({
  loggedIn: session.isAuthenticated,
  currentUserId: session.user.id
});

export default connect(mSTP, { logout })(NavBar);
