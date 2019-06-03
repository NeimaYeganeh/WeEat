import React from "react";
import logo from "../assets/imgs/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar stick-top navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="" height="50px" />
      </a>
      <a className="navbar-brand" href="#">
        <React.Fragment className="btn-group" role="group">
          <button className="btn btn-dark">Login</button>
          <button className="btn btn-dark">Contact</button>
          <button className="btn btn-dark">Resources</button>
        </React.Fragment>
      </a>
    </nav>
  );
};

export default NavBar;
