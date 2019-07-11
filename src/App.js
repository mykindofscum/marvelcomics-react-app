import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';

// import "bootstrap/dist/css/bootstrap.min.css";


// Child components

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  
  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Marvel Comic Collector</h1>
          <p>
            { 
              this.state.user 
              ? `Welcome, ${this.state.user.name}`
              : 'Please Sign Up' 
            }
          </p>       
          
          { this.state.user
            ? <ul>
                <li><Link to="" onClick={this.handleLogout}>Logout</Link></li>
              </ul>
            : <ul>
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
          }
        </header>

        <Switch>
          <Route exact path="/signup" render={({ history }) => 
            <SignupPage 
              history={history}
              handleSignUpOrLogin={this.handleSignUpOrLogin}
            />
          } />
          <Route exact path="/login" render={({ history }) => 
            <LoginPage 
              history={history}
              handleSignUpOrLogin={this.handleSignUpOrLogin} 
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;

