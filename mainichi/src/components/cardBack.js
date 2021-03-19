import React from 'react';
import CardButtons from './cardButtons'

export default function CardBack(props) {

    let word = props.word;

    return(
        <div>
            <h1>{word.definition}</h1>
            <h3>{word.engsentence}</h3>
            <CardButtons onClick={props.flip}>Flip</CardButtons>
            <CardButtons onClick={props.next}>Next</CardButtons>
            <CardButtons onClick={props.last}>Last</CardButtons>
        </div>
    )
}