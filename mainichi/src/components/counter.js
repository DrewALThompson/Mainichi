import React from 'react';
import styled from 'styled-components';

const CounterDiv = styled.div`
    position: absolute;
    right: 170px;
    top: 300px;
    font-size: 50px;
`

export default function Counter(props) {

    return(
        <CounterDiv>
            {props.wordIndex + 1} / {props.wordsLength}
        </CounterDiv>
    )
}