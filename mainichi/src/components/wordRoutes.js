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
    position: absolute;
    left: 380px;
    top: 20px;
`

const Header = styled.p`
    position: absolute;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #FAF8F7;
`


const HeaderEn = styled(Header)`
    top: 130px;
    right: 500px;
`

const HeaderJp = styled(Header)`
    top: 180px;
    right: 440px;
`



const WordRoutes = () => {

    let { path, url} = useRouteMatch();
    
    return(
        <>
            <Container>
                <RouterButton route={`${url}/n1`}>N1</RouterButton>
                <RouterButton route={`${url}/n2`}>N2</RouterButton>
                <RouterButton route={`${url}/n3`}>N3</RouterButton>
                <RouterButton route={`${url}/all`}>All</RouterButton>
                <RouterButton route={`/user`}>My Words</RouterButton>
            </Container>
            <Switch>
                <Route exact path={path}>
                    <HeaderEn>Please Choose A category</HeaderEn>
                    <HeaderJp>カテゴリーを選んでください！</HeaderJp>
                </Route>
                <Route path={`${path}/:wordId`} render={(props) => <WordCard {...props}/>} />
            </Switch>
        </>
    )
}

export default WordRoutes