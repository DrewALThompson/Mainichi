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
        console.log(e)
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className='form' id='Login'>
                <h3>Login Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label><br /><input type='text' name='username' label='Username' value={this.state.username} onChange={e => this.handleOnChange(e)} /><br />
                    <label>Password: </label><br /><input type='text' name='password' label='Password' value={this.state.password} onChange={e => this.handleOnChange(e)} /><br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}