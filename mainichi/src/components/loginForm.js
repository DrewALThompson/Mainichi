import React, { Component } from 'react';
import {fetchUser} from '../actions/fetchUser'
import { connect } from 'react-redux';

class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
          name: '',
          password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.fetchUser(this.state)
        this.setState({
            name: '',
            password: ''
        })
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
                    <label>Username:</label><br /><input type='text' name='name' label='Username' value={this.state.name} onChange={e => this.handleOnChange(e)} /><br />
                    <label>Password: </label><br /><input type='text' name='password' label='Password' value={this.state.password} onChange={e => this.handleOnChange(e)} /><br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null,{fetchUser})(LoginForm)