import React, { Component } from 'react';

export default class NewWordForm extends Component {

    constructor() {
        super()
        this.state = {
          jpname: '',
          definition: '',
          jpsentence: '',
          engsentence: '',
          romkat: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='jpname' value='this.state.jpname' />
                    <input type='text' name='definition' value='this.state.definition' />
                    <input type='text' name='jpsentence' value='this.state.jpsentence' />
                    <input type='text' name='engsentence' value='this.state.engsentence' />
                    <input type='text' name='romkat' value='this.state.romkat' />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}