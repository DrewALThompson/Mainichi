import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'
import { connect } from 'react-redux';
import LoggerContainer from './containers/loggerContainer';
import WordsContainer from './containers/wordsContainer';
import UserContainer from './containers/userContainer';
import NavBar from './components/navBar';
import NotFound from './components/notFound'
import styled from 'styled-components'

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
