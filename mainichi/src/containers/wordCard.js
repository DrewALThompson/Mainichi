import React, { Component } from 'react';
import styled from 'styled-components';
import CardFace from '../components/cardFace';

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
            flipped: false,
            wordIndex: 0,
            loadedWords: this.props.words,
            filteredWords: []
        }
    }

    filterWords(){
        this.props.words.filter((word) => word.category === this.props.match.params.wordId)
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
        // let filterWords;
        // if (this.props.match.params.wordId !== 'all'){
        //     filterWords = this.props.words.filter((word) => word.category === this.props.match.params.wordId);
        //     this.setState((state) => {
        //         return {...state, filteredWords: filterWords}
        //     })
        // } else {
        //     this.setState((state) => {
        //         return {...state, filteredWords: this.state.loadedWords}
        //     })
        // }
        // console.log(this.state.filteredWords)
        let word = this.state.loadedWords[this.state.wordIndex];
        
        return(
            <CardStock>
                {this.state.flipped === true ?
                 <CardFace flip={this.flipCard} next={this.nextCard} last={this.lastCard} title={word.jpname} sentence={word.jpsentence} /> : 
                 <CardFace flip={this.flipCard} next={this.nextCard} last={this.lastCard} title={word.definition} sentence={word.engsentence} />}
            </CardStock>
        )
    }
}