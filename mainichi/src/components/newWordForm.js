import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {addWord} from '../actions/addWord'

const FormBox = styled.div`
    position: absolute;
    top: 100px;
    left: 0px;
`

class NewWordForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
          jpname: '',
          definition: '',
          jpsentence: '',
          engsentence: '',
          user: this.props.user.id
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addWord(this.state)
        this.setState({
        jpname: '',
        definition: '',
        jpsentence: '',
        engsentence: ''
        })
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
                    <input type='submit' onClick={this.props.onClick} />
                </form>
            </FormBox>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addWord: (i) => dispatch(addWord(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWordForm)