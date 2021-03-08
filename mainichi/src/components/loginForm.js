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
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' value={this.state.username} onChange={e => this.handleOnChange(e)} />
                    <input type='text' name='password' value={this.state.password} onChange={e => this.handleOnChange(e)} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}