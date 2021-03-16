import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WordButton = styled.button`
    border: #8E8A83 1px solid;
    background-color: #2869A5;
    color: #FAF8F7;
    padding: 30px;
    position: relative;
    height: 125px;
    width: 125px;
    font-size: 18px;
    border-radius: 10%;
    &:hover {background-color: #85606A};
`

const Border = styled.div`
    border: #8E8A83 1px solid;
    position: absolute;
    top: 40%;
    left: 20%;
    background-color: #E2D7EC;
`

const BorderA = styled(Border)``

const BorderB = styled(Border)``

const Header = styled.p`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #FAF8F7;
`
const HeaderEn = styled(Header)``

const HeaderJp = styled(Header)``


export default class WordRouter extends Component {
    constructor(){
        super()
    }

    onHover = (e) => {

    }

    render(){
        return(
            <>
                <BorderA>

                </BorderA>
                <BorderB>

                </BorderB>
            </>
        )
    }
}
