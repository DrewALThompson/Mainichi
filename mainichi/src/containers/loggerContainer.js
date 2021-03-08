import React, { Component } from 'react';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';
import NewWordForm from '../components/newWordForm';

export default class LoggerContainer extends Component {
    render(){
        return(
            <div>
                <LoginForm />
                <SignupForm />
                <NewWordForm />
            </div>
        )
    }
}

// state will be used for this one