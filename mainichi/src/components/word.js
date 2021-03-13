import React, { Component } from 'react';

export default class Word extends Component {

    render(){

        const word = this.props.word

        return(
            <div>
                {/* <h2>{word.jpname}</h2>
                <p>{word.jpsentence}</p>
                <h2>{word.definition}</h2>
                <p>{word.engsentence}</p> */}
            </div>
        )
    }
}