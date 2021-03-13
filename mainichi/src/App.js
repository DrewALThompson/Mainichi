import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import LoggerContainer from './containers/loggerContainer'
import WordsContainer from './containers/wordsContainer';

const App = (props) => {
  return (
    <Router>
      <NavBar />
      
      <Switch>
        <Route exact path='/'>
          <WordsContainer />
        </Route>
        <Route path='/user'>
          <UserContainer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
