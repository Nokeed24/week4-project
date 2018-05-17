import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import MatchPage from './components/MatchPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/main' component={Board} />
          <Route exact path='/' render={ () => <Redirect to='/main' /> } />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
          <Route exact path='/matches' component={MatchPage} />
        </div>
      </Router>
    )
  }
}

export default App;
