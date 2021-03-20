import React from 'react';
import RouterButton from './routerButton';
import styled from 'styled-components';
import WordCard from '../containers/wordCard'
import {
    Route,
    Switch,
    useRouteMatch
} from "react-router-dom";

const Container = styled.div`
    display: flex;
`

const Header = styled.p`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #FAF8F7;
`
const HeaderEn = styled(Header)``

const HeaderJp = styled(Header)``

export default function WordRoutes(props) {

    let cardWords = props.words;
    let { path, url} = useRouteMatch();
    
    return(
        <Container>
            <RouterButton route={`${url}/n1`} key='n1'>N1</RouterButton>
            <RouterButton route={`${url}/n2`} key='n2'>N2</RouterButton>
            <RouterButton route={`${url}/n3`} key='n3'>N3</RouterButton>
            <RouterButton route={`${url}/all`} key='all'>All</RouterButton>
            <RouterButton route={`/users/words`}>My Words</RouterButton>
            <Switch>
                <Route exact path={path}>
                    <HeaderEn>Please Choose A category</HeaderEn>
                    <HeaderJp>カテゴリーを選んでください！</HeaderJp>
                </Route>
                <Route path={`${path}/:wordId`} render={(props) => <WordCard {...props} words={cardWords}/>} />
            </Switch>
        </Container>
    )
}