import React, { Component } from 'react';
import NewWordForm from '../components/newWordForm.js';
import UserBubble from './components/userBubble.js';

export default class UserContainer extends Component {
    render(){
        return(
            <div>
                <NewWordForm />
            </div>
        )
    }
}