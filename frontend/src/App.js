import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="title"> The Dog Tinder!</h1>
          <Route exact path='/main' component={Board} />
          <Route exact path='/' render={ () => <Redirect to='/main' /> } />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
        </div>
      </Router>
    )
  }
}

export default App;
