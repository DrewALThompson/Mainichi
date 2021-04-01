import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FormBox = styled.div`
    position: absolute;
    top: 200px;
    left: 400px;
`

class NewWordForm extends Component {

    constructor() {
        super()
        this.state = {
          jpname: '',
          definition: '',
          jpsentence: '',
          engsentence: ''
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
            <FormBox>
                <h3>Add a New Word</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>漢字<br />
                        <input type='text' name='jpname' value={this.state.jpname} onChange={e => this.handleOnChange(e)} />
                    </label><br />
                    <label>意味<br />
                        <input type='text' name='definition' value={this.state.definition} onChange={e => this.handleOnChange(e)} />
                    </label><br />
                    <label>文<br />
                        <input type='text' name='jpsentence' value={this.state.jpsentence} onChange={e => this.handleOnChange(e)} />
                    </label><br />
                    <label>Translation<br />
                        <input type='text' name='engsentence' value={this.state.engsentence} onChange={e => this.handleOnChange(e)} />
                    </label><br />
                    <input type='submit' />
                </form>
            </FormBox>
        )
    }
}

export default connect(null,{addWord})(NewWordForm)