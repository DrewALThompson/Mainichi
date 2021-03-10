import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggerContainer from './containers/loggerContainer'
import WordsContainer from './containers/wordsContainer';

export default class App extends Component {
  render() {

    // let display;
    // if (this.state.loggedIn === true){
    //   display = <wordsContainer />
    // } else {
    //   display = <loggerContainer />
    // }

    return (
     <div>
       < WordsContainer />
     </div>
    )
  }
}
