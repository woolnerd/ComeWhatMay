import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai'
import { createRelative, clearRelativeErrors } from '../../actions/relative_actions';



class CreateRelative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.profileId,
      name: "",
      age: "",
      relationship: "",
      phoneNumber: "",
      showPhoneNumber: "",
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

  handleModal(e) {
    e.preventDefault();
    this.props.clearRelativeErrors();
    setTimeout(() => this.props.closeModal(), 0)
  }

  handleInput(type) {
    return (e) => {
      if (type === "phoneNumber") {
        this.setState({showPhoneNumber: e.target.value});
        this.parseNumber(e.target.value);
      } else {
        this.setState({ [type]: e.target.value });
      }
    };
  }

  parseNumber(num) {
      num = num.split('')
               .map(el=> parseInt(el))
               .filter(n => !isNaN(n)).join('')
      
      num = parseInt(num)
      this.setState({ phoneNumber: num });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createRelative(this.state)
      .then(() =>
        this.state.errors.length === 0 ? this.props.closeModal() : null
      )
  }

  renderErrors() {
    return (
      <ul className="errors" id="create-relative-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li id="relative-errors-create" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="create-relative" id="create-relative-error-space">
        <div className="relative-header">
          <h2>Add Household Member</h2>
          <p className="exit_edit" onClick={this.handleModal}>
            <AiOutlineClose className="close-x" />
          </p>
        </div>
        <div className="create-relative-details">
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
              value={this.state.showPhoneNumber}
              onChange={this.handleInput("phoneNumber")}
              placeholder="(123) 555-1212"
              type="text"
            />
          </div>
          <div className="btn-container">
            <button
              className="save-button btn-style-1"
              onClick={this.handleSubmit}
            >
              Add
            </button>
          </div>
          <div className="error-container">{this.renderErrors()}</div>
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
    profileId: ownProps.profileId,
    errors: state.errors.relative
});

const mDTP = dispatch => ({
    createRelative: relative => dispatch(createRelative(relative)),
    closeModal: () => dispatch(closeModal()),
    clearRelativeErrors: () => dispatch(clearRelativeErrors())
})

export default connect(mSTP, mDTP)(CreateRelative);