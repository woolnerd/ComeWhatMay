import React from "react";
import { connect } from "react-redux";
import { updateUserProfile, fetchUserProfile, clearProfileErrors } from "../../actions/profile_actions";
import { closeModal } from '../../actions/modal_actions';
import { AiOutlineClose } from 'react-icons/ai'
import '../profile/profile.css';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.profile._id,
      user: this.props.profile.user,
      email: this.props.profile.email,
      householdName: this.props.profile.householdName,
      householdSize: this.props.profile.householdSize,
      phoneNumber: this.props.profile.phoneNumber,
      showPhoneNumber: this.props.profile.phoneNumber,
      errors: [],
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  parseNumber(num) {
    num = num
      .split("")
      .map((el) => parseInt(el))
      .filter((n) => !isNaN(n))
      .join("");

    num = parseInt(num);
    this.setState({ phoneNumber: num });
  }

  componentDidMount() {
    this.props
      .fetchUserProfile(this.props.currentUser)
      .then((res) => this.setState({ profile: res }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateUserProfile(this.state)
      .then(() =>
        this.state.errors.length === 0 ? this.props.closeModal() : null
      );
  }

  handleModal(e) {
    e.preventDefault();
    this.props.clearProfileErrors();
    setTimeout(() => this.props.closeModal(), 0);
  }

  update(type) {
    return (e) => {
      if (type === "phoneNumber") {
        this.setState({ showPhoneNumber: e.target.value });
        this.parseNumber(e.target.value);
      } else {
        this.setState({ [type]: e.target.value });
      }
    };
  }

  renderErrors() {
    return (
      <ul className="errors" id="edit-profile-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li id="profile-edit-error" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
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
                value={this.state.showPhoneNumber}
                onChange={this.update("phoneNumber")}
                placeholder="(123) 555-1212"
                type="text"
              />
            </label>
            <br />
            <label>
              Household Size:
              <input
                id="household-size-edit"
                onChange={this.update("householdSize")}
                type="number"
                min="1"
                value={this.state.householdSize}
              />
            </label>
            <button id="edit-profile-btn">Edit Profile</button>
            <div className="error-container">{this.renderErrors()}</div>
          </form>
        </div>
      </div>
    );
  }
}

const mSTP = ({ entities, session, errors }) => {
  return {
    currentUser: session.user.id,
    errors: errors.profile,
    profile: Object.values(entities.profile).filter(profile => profile.user === session.user.id)[0]
  };
};

const mDTP = (dispatch) => {
  return {
    updateUserProfile: (profile) => dispatch(updateUserProfile(profile)),
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    closeModal: () => dispatch(closeModal()),
    clearProfileErrors: () => dispatch(clearProfileErrors())

  };
};

export default connect(mSTP, mDTP)(EditProfileForm);
