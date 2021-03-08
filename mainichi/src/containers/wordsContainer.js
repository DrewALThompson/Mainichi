import React, { Component, Suspense } from 'react';
import Words from './components/words.js'

export default class WordsContainer extends Component {
    constructor(props){       
        super(props)
        this.state = {
            wordIDX: 0,
            words: []
        }
    }

    componentDidMount(){}

    handleOnClick(){}

    

    render(){
        return(
            < Words />
        )
    }
}

// props will be used for this one
// Need a router here will also route to user words
// [
//     {jpname: "太陽" , definition: 'sun', jpsentence: '太陽が熱いです', engsentence: 'the sun is hot', category: 'noun'},
//     {jpname: "記憶" , definition: 'memory', jpsentence: '記憶が経ている', engsentence: 'memory is going bad', category: 'noun'},
//     {jpname: "ながる" , definition: 'to punch', jpsentence: '壁をながした', engsentence: 'he punched the wall', category: 'verb'}
// ]