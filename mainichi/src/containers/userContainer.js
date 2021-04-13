import React, { Component } from 'react';
import UserwordsContainer from './userwordsContainer'
import LoggerContainer from './loggerContainer'
import { connect } from 'react-redux';


class UserContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){

        return(
            <>
                {this.props.user !== null ?
                <UserwordsContainer /> :
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