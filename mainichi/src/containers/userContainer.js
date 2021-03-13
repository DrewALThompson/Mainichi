import React, { Component } from 'react';
import NewWordForm from '../components/newWordForm.js';


export default class UserContainer extends Component {
    render(){
        return(
            <div>
                <NewWordForm />
            </div>
        )
    }
}