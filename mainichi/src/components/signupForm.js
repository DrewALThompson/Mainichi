import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchNewUser} from '../actions/fetchNewUser'

export default class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
          name: '',
          password: '',
          password_confirmation: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchNewUser(this.state)
        this.setState({
            name: '',
            pasword: ''
        })
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
                    <label>Username:</label><br /><input type='text' name='name' label='Username' value={this.state.name} onChange={e => this.handleOnChange(e)} /><br />
                    <label>Password:</label><br /><input type='text' name='password' label='Password' value={this.state.password} onChange={e => this.handleOnChange(e)} /><br />
                    <label>Password Confirmation:</label><br /><input type='text' name='password_confirmation' label='Password Confirmation' value={this.state.password_confirmation} onChange={e => this.handleOnChange(e)} /><br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null,{fetchNewUser})(SignupForm)