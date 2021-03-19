import React from 'react';
import RouterButton from '../components/routerButton';
import styled from 'styled-components';
import Word from './word'
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

    let { path, url} = useRouteMatch();

    return(
        <Container>
            <RouterButton route={`${url}/n1`}>N1</RouterButton>
            <RouterButton route={`${url}/n2`}>N2</RouterButton>
            <RouterButton route={`${url}/n3`}>N3</RouterButton>
            <RouterButton route={`${url}/all`}>All</RouterButton>
            <RouterButton route={`/users/words`}>My Words</RouterButton>
            <Switch>
                <Route exact path={path}>
                    <HeaderEn>Please Choose A category</HeaderEn>
                    <HeaderJp>カテゴリーを選んでください！</HeaderJp>
                </Route>
                <Route path={`${path}/:wordId`}>
                    <Word words={props.words}/>
                </Route>
            </Switch>
        </Container>
    )
}