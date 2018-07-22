import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  let user_json = JSON.stringify(response.w3);
  console.log(user_json);
  localStorage.setItem('user_json', user_json);
  document.cookie = "user_json=" + user_json;
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Google Login</h1>
        </header>
        <div className="App-intro">
          <GoogleLogin
            clientId="COMPLETE YOUR GOOGLE AUTH CLIENT ID FROM GCP"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}/>
        </div>
      </div>
    );
  }
}

export default App;
