import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import SearchBar from './components/SearchBar/SearchBar';
import Collection from './components/Collection/Collection';
import SearchResults from './components/SearchResults/SearchResults';
// import SearchPage from '.components/SearchPage/SearchPage';

import "bootstrap/dist/css/bootstrap.min.css";

// Look for url encode for titleStartsWith
const crypto = require('crypto');
const marvelURL = 'https://gateway.marvel.com:443/v1/public/comics?'
const apiKey = `${process.env.REACT_APP_PUBLIC_API_KEY}`;
const privateKey = `privatekey${process.env.REACT_APP_PRIVATE_API_KEY}`;

// const url = `${marvelUrl}${query}${auth}`;
// const query = `?limit=${req.query.limit}&titleStartsWith=${req.query.title}`;

const ts = new Date().getTime();
const hash = crypto.createHash('md5').update(`${ts}${privateKey}${apiKey}`).digest('hex');
console.log(privateKey);
console.log(hash);

export function getComics(query) {
  return fetch(`${marvelURL}titleStartsWith=${query}&apikey=${apiKey}`, {mode: "cors"})
  .then(res => res.json());
}

class SearchPage extends Component {
  state = {
    results: []
  }

  handleSearch = async (query) => {
    console.log(query);
    const results = await getComics(query);
    this.setState({ results: results.data });
      console.log(results.data);
      return { results: results.data };

    // 1. Update state with the results
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearch} />
        <SearchResults result={this.state.results} />
      </div>
    );
  }
}
// Child components

class App extends Component {
  constructor() {
    super();
    this.state = {
      collection: [],
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

  handleAddComic = e => {
    e.preventDefault();
  
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
          {/* <Route exact path="/search" render={({ history }) =>
            <SearchBar 
              history={history}
            />
          } />
          <Route exact path="/search" render={({ history }) =>
            <SearchResults
              history={history}
            />
          } /> */}
          <Route path="/search" component={SearchPage} />
          <Route path="/collection" component={Collection} />
        </Switch>
      </div>
    );
  }
}

export default App;

