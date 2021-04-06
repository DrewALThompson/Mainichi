import React, { Component } from 'react';
import RouterButton from '../components/routerButton';
import styled from 'styled-components'


const Border = styled.div`
    position: absolute;
`

const BorderA = styled(Border)`
    top: 40%;
    left: 35%;
`

const BorderB = styled(Border)`
    top: 40%;
    left: 55%;
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
            <>
                <HeaderEn>Please Choose an option!</HeaderEn>
                <HeaderJp>選択してください！</HeaderJp>
                <BorderA>< RouterButton route={'/study'}>Let's Study</RouterButton></BorderA>
                <BorderB>< RouterButton route={'/user'}>Take me to my page!</RouterButton></BorderB>
            </>
        )
    }
}
