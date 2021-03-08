import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggerContainer from './containers/loggerContainer'

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
       < LoggerContainer />
     </div>
    )
  }
}
