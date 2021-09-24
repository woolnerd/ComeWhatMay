import React from "react";
import { connect } from "react-redux";
import { updateUserProfile, fetchUserProfile } from "../../actions/profile_actions";
import { closeModal } from '../../actions/modal_actions';
import { AiOutlineClose } from 'react-icons/ai'
import '../profile/profile.css';

// import "./profile.css";

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.profile._id,
      user: this.props.profile.user, 
      email: this.props.profile.email, 
      householdName: this.props.profile.householdName,
      householdSize: this.props.profile.householdSize,
      phoneNumber: this.props.profile.phoneNumber
    }
    // this.state = this.props.profile;
    this.handleModal = this.handleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)


  }

  componentWillMount(){
      
  }

  componentDidMount(){
      this.props.fetchUserProfile(this.props.currentUser).then(res => this.setState({profile: res}))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUserProfile(this.state)
      .then(() => this.props.closeModal());
  }

  handleModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  update(field) {
    //   console.log(this.state)
    return (e) => {
      let value = e.target.value;
    //   if (
    //       field === "phoneNumber" ||
    //       field === "householdSize"
    //   ) {
    //       value = parseInt(e.target.value);
    //   }
      this.setState({ [field]: value });
    };
  }

  render() {
    return (
      <div className="edit-form">
        <div className="edit-form-header">
          <h2>Edit Your Profile</h2>
          <p onClick={this.handleModal}>
            <AiOutlineClose className="exit-edit" />
          </p>
        </div>
        <div className="edit-form-container">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>
              Household Name:
              <input
                onChange={this.update("householdName")}
                type="text"
                value={this.state.householdName}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                onChange={this.update("email")}
                type="text"
                value={this.state.email}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                onChange={this.update("phoneNumber")}
                type="text"
                value={this.state.phoneNumber}
              />
            </label>
            <br />
            <label>
              Household Size:
              <input
                onChange={this.update("householdSize")}
                type="text"
                value={this.state.householdSize}
              />
            </label>
          <button>Edit Profile</button>
          </form>
        </div>
      </div>
    );
  }
}

const mSTP = ({ entities, session }) => {
    // debugger
  return {
    currentUser: session.user.id,
    // profileId: Object.keys(entities.profile)[0],
    profile: Object.values(entities.profile).filter(profile => profile.user === session.user.id)[0]
    // profile: {
    //   user: session.user.id,
    //   email: entities.profile.email,
    //   householdName: entities.profile.householdName,
    //   householdSize: entities.profile.householdSize,
    //   phoneNumber: entities.profile.phoneNumber,
    // },
  };
};

const mDTP = (dispatch) => {
  return {
    updateUserProfile: (profile) => dispatch(updateUserProfile(profile)),
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(EditProfileForm);
