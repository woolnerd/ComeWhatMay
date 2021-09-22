import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUserProfile } from "../../actions/profile_actions";
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';


import NavBar from "./navbar";

const mSTP = ({ entities, session }, ownProps) => {
  return {
    loggedIn: session.isAuthenticated,
    currentUserId: session.user,
    profileId: ownProps.match.params.profileId, 
    // profile: Object.values(entities.profile).filter(
    //   (profile) => profile.user === session.user.id
    // )[0],
  };
};

const mDTP = (dispatch) => ({
  logout: ()=> dispatch(logout()),
  fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
  openModal: (modal, id) => dispatch(openModal(modal, id))

})

export default withRouter(connect(mSTP, mDTP)(NavBar));
