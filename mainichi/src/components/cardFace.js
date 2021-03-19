import React from 'react';
import CardButtons from './cardButtons'

export default function CardFront(props) {

    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.sentence}</h3>
            <CardButtons onClick={props.last}>Last</CardButtons>
            <CardButtons onClick={props.flip}>Flip</CardButtons>
            <CardButtons onClick={props.next}>Next</CardButtons>
        </div>
    )
}