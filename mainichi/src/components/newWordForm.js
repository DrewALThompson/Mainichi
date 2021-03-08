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
        console.log(e)
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className='form' id='NewWord'>
                <h3>Add a New Word</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='jpname' label='漢字' value={this.state.jpname} onChange={e => this.handleOnChange(e)} />
                    <input type='text' name='definition' label='意味' value={this.state.definition} onChange={e => this.handleOnChange(e)} />
                    <input type='text' name='jpsentence' label='文' value={this.state.jpsentence} onChange={e => this.handleOnChange(e)} />
                    <input type='text' name='engsentence' label='Eng' value={this.state.engsentence} onChange={e => this.handleOnChange(e)} />
                    <input type='text' name='romkat' label='ローマ／カタ' value={this.state.romkat} onChange={e => this.handleOnChange(e)} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}