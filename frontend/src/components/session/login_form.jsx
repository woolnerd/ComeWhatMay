import React from "react";
import { withRouter } from "react-router-dom";
import { openModal } from '../../actions/modal_actions';
import "./session.css";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

 

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/profile/new");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user)
  }



  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3 className="banner-login">
          <span>Welcome Back</span>
          <span>to</span>
          <span>Come What May</span>
        </h3>
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="input-div">
              <div>
                <label>
                  Email:
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                  />
                </label>
                <br />
                <input
                  className="btn-style-1 login-btn"
                  type="submit"
                  value="Submit"
                />
                {this.renderErrors()}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
