import React, { Component } from 'react';

export default class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
          username: '',
          password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' value='this.state.username' />
                    <input type='text' name='password' value='this.state.password' />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}