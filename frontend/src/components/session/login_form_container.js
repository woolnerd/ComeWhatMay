import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { fetchUserProfile } from "../../actions/profile_actions";
import LoginForm from "./login_form";
import { openModal } from '../../actions/modal_actions';


const mSTP = (state) => {
  return {
    errors: state.errors.session,
    // userId: state.session.user.id

  };
};

const mDTP = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default connect(mSTP, mDTP)(LoginForm);
