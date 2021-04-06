import React from 'react';
import CardButtons from './cardButtons'
import styled from 'styled-components';

const ButtonContainer = styled.div`
`

const TitleContainer = styled.h1`
    text-align: center;
`

const SentContainer = styled.h3`
    text-align: center;
`

export default function CardFace(props) {

    return(
        <div>
            <TitleContainer>{props.title}</TitleContainer>
            <SentContainer>{props.sentence}</SentContainer>
            <ButtonContainer>
                <CardButtons onClick={props.remove}>Remove</CardButtons>
                <CardButtons onClick={props.last}>Last</CardButtons>
                <CardButtons onClick={props.flip}>Flip</CardButtons>
                <CardButtons onClick={props.next}>Next</CardButtons>
            </ButtonContainer>
        </div>
    )
}