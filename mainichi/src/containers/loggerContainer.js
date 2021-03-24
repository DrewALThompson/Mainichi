import React, { Component } from 'react';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';

export default class LoggerContainer extends Component {
    render(){
        return(
            <div className='login-box'>
                <LoginForm />
                <SignupForm />
            </div>
        )
    }
}

// state will be used for this one