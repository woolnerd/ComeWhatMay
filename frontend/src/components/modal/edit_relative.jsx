import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { AiOutlineClose } from 'react-icons/ai'
import { updateRelative, clearRelativeErrors } from '../../actions/relative_actions';



class CreateRelative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.relative._id,
      profile: this.props.relative.profile,
      name: this.props.relative.name,
      age: this.props.relative.age,
      relationship: this.props.relative.relationship,
      phoneNumber: this.props.relative.phoneNumber,
      showPhoneNumber: this.props.relative.phoneNumber,
      errors: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.parseNumber = this.parseNumber.bind(this);
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
    if (num === null) {
      num = "";
      this.setState({ phoneNumber: num });
    } else {
      num = num
        .split("")
        .map((el) => parseInt(el))
        .filter((n) => !isNaN(n))
        .join("");
      num = parseInt(num);
      this.setState({ phoneNumber: num });
    }
  }

  handleModal(e) {
    e.preventDefault();
    this.props.clearRelativeErrors();
    setTimeout(() => this.props.closeModal(), 0);
  }

  handleInput(type) {
    return (e) => {
      if (type === "phoneNumber") {
        this.setState({ showPhoneNumber: e.target.value });
        this.parseNumber(e.target.value);
      } else {
        this.setState({ [type]: e.target.value });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateRelative(this.state)
      .then(() =>
        this.state.errors.length === 0 ? this.props.closeModal() : null
      );
  }

  renderErrors() {
    return (
      <ul className="errors" id="edit-relative-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li id="relative-errors-edit" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="create-relative" id="edit-relative-error-space">
        <div className="relative-header">
          <h2>Edit Household Member</h2>
          <p className="exit_edit" onClick={this.handleModal}>
            <AiOutlineClose />
          </p>
        </div>
        <div className="name">
          <label>Name</label>
          <input
            value={this.state.name}
            onChange={this.handleInput("name")}
            type="text"
          />
        </div>
        <div className="age">
          <label>Age </label>
          <input
            value={this.state.age}
            onChange={this.handleInput("age")}
            type="text"
          />
        </div>
        <div className="Relationship">
          <label>Relationship</label>
          <input
            value={this.state.relationship}
            onChange={this.handleInput("relationship")}
            type="text"
          />
        </div>
        <div className="phone-number">
          <label>Phone Number</label>
          <input
            value={this.state.phoneNumber}
            onChange={this.handleInput("phoneNumber")}
            placeholder="(123) 555-1212"
            type="text"
          />
        </div>
        <div className="btn-container">
          <button className="save-button" onClick={this.handleSubmit}>
            Update
          </button>
        </div>
        <div className="error-container">{this.renderErrors()}</div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
    errors: state.errors.relative,
    relativeId: ownProps.profileId,
    relative: state.entities.relative[ownProps.relativeId]
});

const mDTP = dispatch => ({
    updateRelative: relative => dispatch(updateRelative(relative)),
    closeModal: () => dispatch(closeModal()),
    clearRelativeErrors: () => dispatch(clearRelativeErrors())
})

export default connect(mSTP, mDTP)(CreateRelative);