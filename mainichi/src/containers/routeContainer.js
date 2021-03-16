import React, { Component } from 'react';
import WordRouter from '../components/wordRouter'
import styled from 'styled-components'

const Border = styled.div`
    border: #8E8A83 1px solid;
    position: absolute;
    top: 40%;
    left: 20%;
    background-color: #E2D7EC;
`
const Header = styled.p`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #FAF8F7;
`
const HeaderEn = styled(Header)``

const HeaderJp = styled(Header)``

export default class RouteContainer extends Component {
    render(){
        return(
            <div></div>
        )
    }
}