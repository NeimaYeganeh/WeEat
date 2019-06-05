import React, { Component } from "react";
import NavBar from "./components/navbar";
import Map from "./components/map";
import fire from "./config/fire";
import Login from "./components/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      email: "not a email",
      password: "not a password",
      loggingIn: false
    };
  }

  // called once upon class creation to set up listener
  componentDidMount() {
    this.authListener();
  }

  // listener to detect changes in firebase
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  // Changes state of logginIn to display/hide login window
  handleLoginWindow = () => {
    this.setState({
      loggingIn: !this.state.loggingIn
    });
  };

  // Makes requests to FB DB for user
  handleLogin = (email, password) => {
    console.log("login called");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        console.log("login success!");
        this.componentDidUpdate(this.state.loggingIn, false);
      })
      .catch(error => {
        console.log("login failed");
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onLoginWindow={this.handleLoginWindow} user={this.state.user} />
        <Map />
        {this.state.loggingIn === true && (
          <Login
            onLoginWindow={this.handleLoginWindow}
            onLogin={this.handleLogin}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
