import React, { Component } from 'react';
import Word from '../components/word.js'
import Words from '../components/words.js'
import styled from 'styled-components';
import {
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

const Container = styled.div`
`

export default class WordsContainer extends Component {
    constructor(props){       
        super(props)
        this.state = {
            wordIDX: 0,
            words: [
                {jpname: "太陽" , definition: 'sun', jpsentence: '太陽が熱いです', engsentence: 'the sun is hot', category: 'n1'},
                {jpname: "記憶" , definition: 'memory', jpsentence: '記憶が経ている', engsentence: 'memory is going bad', category: 'n2'},
                {jpname: "ながる" , definition: 'to punch', jpsentence: '壁をながした', engsentence: 'he punched the wall', category: 'n2'},
                {jpname: "案外" , definition: 'surprisingly', jpsentence: '案外バカになっている', engsentence: 'surprisingly he is becoming stupid', category: 'n3'},
                {jpname: "成り立つ" , definition: 'to consist of', jpsentence: '命はいろいろのことを成り立ちます', engsentence: 'life consists of various things', category: 'n3'}
            ]
        }
    }

    // componentDidMount(){
    //     if (this.state.words === []){
    //         fetch('http://localhost:3000')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({words: json.words})
    //         })
    //     }
    // }

    // filterWords = () => {
    //     this.state.words.filter((word) => word.category ===)
    // }

    render(){
        return(
            <Container>
                
            </Container>
        )
    }
}
