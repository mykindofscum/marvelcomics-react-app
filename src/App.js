import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import comicService from './utils/comicService';
import tokenService from './utils/tokenService';
import SearchBar from './components/SearchBar/SearchBar';
import Collection from './components/Collection/Collection';
import SearchResults from './components/SearchResults/SearchResults';
import { getComics } from './services/mc-api.js';

import "bootstrap/dist/css/bootstrap.min.css";

class SearchPage extends Component {
  state = {
    results: []
  }

  handleSearch = async (query) => {
    console.log(query);
    this.setState({ results: [] });

    const results = await getComics(query);
    this.setState({ results: results.data });
      console.log(results.data);
      return { results: results.data };
    }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearch} />
        <SearchResults handleAddComic={this.props.handleAddComic} result={this.state.results} />
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
      newComic: null,
      query: '',
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    if (this.state.user) {
      let collection = await fetch('/api/collections', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + tokenService.getToken()
        }
      }).then(res => res.json())
      
      this.setState({ collection });
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  
  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleAddComic = (e, result) => {
    e.preventDefault();

    // this.setState({ newComic: result })
    comicService.addComic(result);
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

          <Route path="/search" render={(props) => (
            userService.getUser() ?
            <SearchPage {...props} handleAddComic={this.handleAddComic} />
            :
            <Redirect to='/login' />
            )} />
          <Route path="/collection" render={(props) =>
            userService.getUser() ?
            <Collection {...props} collection={this.state.collection} />
            :
              <Redirect to='/login'/>
            } />
          </Switch>
        </div>
      );
    }
  }
  
  export default App;

  
