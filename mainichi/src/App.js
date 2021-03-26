import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import { connect } from 'react-redux';
// import LoggerContainer from './containers/loggerContainer';
import WordsContainer from './containers/wordsContainer';
import RouteContainer from './containers/routeContainer';
import UserContainer from './containers/userContainer';
import NavBar from './components/navBar';
import NotFound from './components/notFound';


const App = () => {

  return (
    <Router>
      <NavBar />
      
      <Switch>
        <Route exact path='/'>
          <RouteContainer />
        </Route>
        <Route path='/user'>
          <UserContainer />
        </Route>
        <Route path='/study'>
          <WordsContainer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
