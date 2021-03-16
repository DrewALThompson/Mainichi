import React, { Component } from 'react';
import StudyRouter from '../components/studyRouter';
import UserRouter from '../components/userRouter';
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
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <HeaderEn>Please Choose an option!</HeaderEn>
                <HeaderJp>選択してください！</HeaderJp>
                <BorderA>< StudyRouter /></BorderA>
                <BorderB>< UserRouter /></BorderB>
            </>
        )
    }
}