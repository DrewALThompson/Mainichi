import React from 'react';
import CardButtons from './cardButtons'

export default function CardFront(props) {

    let word = props.word;

    return(
        <div>
            <h1>{word.jpname}</h1>
            <h3>{word.jpsentence}</h3>
            <CardButtons onClick={props.flip}>Flip</CardButtons>
            <CardButtons onClick={props.next}>Next</CardButtons>
            <CardButtons onClick={props.last}>Last</CardButtons>
        </div>
    )
}