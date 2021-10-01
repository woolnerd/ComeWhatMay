import React from "react";
import { withRouter, Link } from "react-router-dom";
import './session.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.signedIn === true) {
    //   this.props.history.push("/login");
    // }

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

    this.props.signup(user)
    .then( this.state.errors === {} ? () => this.props.login(user) : null  )
  } 

  demoLogin(){
    let user = {
      email: "demo@demo.demo",
      password: "password",
    };
    this.props.login(user)
  }

  renderErrors() {
    return (
      <ul className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-signup-main">
        <div className="signup-form-container">
          <h2>Signup</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <br />
              <label>
                Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </label>
              <br />
              <label>
                Password
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
              <input
                className="btn-style-1 login-btn"
                type="submit"
                value="Demo User"
                onClick={() => this.demoLogin()}
              />
              <br />
              <p className="or-submit">
                or{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(SignupForm);
