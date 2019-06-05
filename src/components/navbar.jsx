import React, { Component } from "react";
import logo from "../assets/imgs/logo.png";
import fire from "../config/fire";

class NavBar extends Component {
  state = {};

  renderLoginButtons = () => {
    if (this.props.user === null)
      return (
        <button onClick={this.props.onLoginWindow} className="btn btn-dark">
          Login
        </button>
      );
    return (
      <button onClick={this.props.onLoginWindow} className="btn btn-dark">
        Logout
      </button>
    );
  };

  render() {
    return (
      <nav className="navbar stick-top navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" height="50px" />
        </a>
        <a className="navbar-brand" href="#">
          <div>
            {this.renderLoginButtons()}
            <button className="btn btn-dark">Contact</button>
            <button className="btn btn-dark">Resources</button>
          </div>
        </a>
      </nav>
    );
  }
}

export default NavBar;
