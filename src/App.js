import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import SearchBar from './components/SearchBar/SearchBar';
import Collection from './components/Collection/Collection';
import "bootstrap/dist/css/bootstrap.min.css";

class SearchBarPage extends Component {
  
  handleSearch = (query) => {
  console.log(query);
  }

  render() {
    return (
      <SearchBar onSubmit={this.handleSearch} />
    )
  }
}
// Child components

class App extends Component {
  constructor() {
    super();
    this.state = {
      comics: [],
      query: '',
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
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="flex-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/search" className="nav-link">Search for Comic by Title</Link>
                </li>
                <li className="nav-item">
                  <Link to="/collection" className="nav-link">My Collection</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <Link to="/" className="navbar-brand">Snikety Snikt's Comic Collector</Link>
            </div>
            <div className="flex-1 text-right">
                { this.state.user
                ? <ul class="list-unstyled mb-0">
                    <li className="nav-item"><Link to="" onClick={this.handleLogout}>Logout</Link></li>
                  </ul>
                : <ul class="list-unstyled mb-0">
                    <li className="nav-item"><Link to="/signup">Sign up</Link></li>
                    <li className="nav-item"><Link to="/login">Login</Link></li>
                  </ul>
              }
            </div>
            </nav>
          </div>

        <header className="App-header">
          <h1>Snikety Snikt's Comic Collector</h1>
          <p>
            { 
              this.state.user 
              ? `Welcome, ${this.state.user.name}`
              : 'Please Sign Up' 
            }
          </p>       
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
          <Route path="/search" component={SearchBarPage} />
          <Route path="/collection" component={Collection} />
        </Switch>
      </div>
    );
  }
}

export default App;

