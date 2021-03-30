import React, { Component } from 'react';
import NewWordForm from '../components/newWordForm.js';
import LoggerContainer from './loggerContainer'
import { connect } from 'react-redux';


class UserContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){

        console.log(this.props.user)
        return(
            <>
                {this.props.user !== null ?
                <NewWordForm /> :
                <LoggerContainer />}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserContainer)