import React, { Component } from "react";
import "../assets/style/stylesheet.css";
import logo from "../assets/imgs/wheat.png";
import fire from "../config/fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  callLogin = () => {
    this.props.onLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="login-bg">
        <div className="login-content">
          <div className="close" onClick={this.props.onLoginWindow}>
            +
          </div>
          <img src={logo} alt="logo" className="login-logo" />
          <input
            type="text"
            placeholder="Username"
            className="login"
            id="username"
            onChange={this.handleEmail}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login"
            id="password"
            onChange={this.handlePassword}
          />
          <button className="btn btn-primary" onClick={this.props.onLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
