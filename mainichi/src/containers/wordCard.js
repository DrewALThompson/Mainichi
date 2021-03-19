import React, { Component } from 'react';
import styled from 'styled-components';
import CardFront from '../components/cardFront';
import CardBack from '../components/cardBack';

// let {wordId} = useParams();
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const CardStock = styled.div`
    position: absolute;
    top: 100px;
    left: 500px;
`

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: null,
            flipped: false,
            wordIndex: 0,
            loadedWords: this.props.words
        }
    }

    componentDidMount(){
        // let filteredWords = this.state.loadedWords.filter(() => ())
    }

    flipCard = (e) => {
        e.preventDefault();
        this.setState({flipped: !this.state.flipped})
    }

    nextCard = (e) => {
        e.preventDefault();
        if (this.state.wordIndex === this.state.loadedWords.length -1){
            this.setState((state) => {
                return {...state, wordIndex: 0}
            })
        } else {
            this.setState((state) => {
                return {...state, wordIndex:state.wordIndex + 1}
            })
        }
        
    }

    lastCard = (e) => {
        e.preventDefault();
        if (this.state.wordIndex === 0){
            this.setState((state) => {
                return {...state, wordIndex: this.state.loadedWords.length - 1}
            })
        } else {
            this.setState((state) => {
                return {...state, wordIndex:state.wordIndex - 1}
            })
        }
    }


    render(){
        // let word = this.state.loadedWords[this.state.wordIndex];
        console.log(this.props)
        return(
            <CardStock>
                {/* {this.state.flipped === true ?
                 <CardFront flip={this.flipCard} next={this.nextCard} last={this.lastCard} word={word} /> : 
                 <CardBack flip={this.flipCard} next={this.nextCard} last={this.lastCard} word={word} />} */}
            </CardStock>
        )
    }
}