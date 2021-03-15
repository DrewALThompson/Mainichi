import React, { Component } from 'react';

export default class Word extends Component {

    render(){

        let word = this.props.words[0];

        return(
            <div className='word-card'>
                {word.jpname}{word.definition}{word.jpsentence}{word.engsentence}
            </div>
        )
    }
}