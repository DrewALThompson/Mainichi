import React, { Component } from 'react';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';
import styled from 'styled-components'

const LoginDiv = styled.div`
    position: absolute;
    top: 100px;
    left: 500px;
`

export default class LoggerContainer extends Component {
    render(){
        return(
            <LoginDiv>
                <LoginForm />
                <SignupForm />
            </LoginDiv>
        )
    }
}

