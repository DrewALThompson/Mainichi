import React, { Component } from 'react';

export default class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
          username: '',
          password: '',
          password_confirmation: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(this.state.username)
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className='form' id='Signup'>
                <h3>Signup Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label><br /><input type='text' name='username' label='Username' value={this.state.username} onChange={e => this.handleOnChange(e)} /><br />
                    <label>Password:</label><br /><input type='text' name='password' label='Password' value={this.state.password} onChange={e => this.handleOnChange(e)} /><br />
                    <label>Password Confirmation:</label><br /><input type='text' name='password_confirmation' label='Password Confirmation' value={this.state.password_confirmation} onChange={e => this.handleOnChange(e)} /><br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}