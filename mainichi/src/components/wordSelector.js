import React, { Component } from 'react';
import styled from 'styled-components';

const WordButton = styled.button`
    border: black 1px transparent;
    padding: 30px;
    border-radius: 50%;
    position: relative;
`

const WordMyButton = styled(WordButton)`
    top: 200px;
     right: 125px;
    &:hover {border: black 5px transparent};
`
const Word1Button = styled(WordButton)`
    top: 90px;
     right: -50px;
    &:hover {border: black 5px transparent};
`

const Word2Button = styled(WordButton)`
    top: 90px;
     right: -290px;
    &:hover {border: black 5px transparent};
`

const Word3Button = styled(WordButton)`
    top: 350px;
    right: 100px;
    &:hover {border: black 5px transparent};
`

const WordAllButton = styled(WordButton)`
    top: 350px;
     right: -110px;
    &:hover {border: black 5px transparent};
`

const WordBorder = styled.div`
    border: #8B8F94 2px solid;
    position: absolute;
    top: 10px;
    left: 33%;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background-color: #E2D7EC;
`

export default class WordSelector extends Component {

    render(){
        return(
            <WordBorder>
                <Word1Button name='n1' type='button'>N1</Word1Button>
                <Word2Button name='n2' type='button'>N2</Word2Button>
                <Word3Button name='n3' type='button'>N3</Word3Button>
                <WordAllButton name='all' type='button'>All</WordAllButton>
                <WordMyButton type='button'>My <br/>Words</WordMyButton>
            </WordBorder>
        )
    }
}