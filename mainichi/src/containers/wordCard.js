import React, { Component } from 'react';
import styled from 'styled-components';
import CardFace from '../components/cardFace';
import { connect } from 'react-redux';
import { setIndex } from '../actions/setIndex';

const CardStock = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 200px;
    left: 400px;
    border: white solid 2px;
    width: 400px;
    height 224px;

`

class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            flipped: false,
            wordIndex: 0,
            loadedWords: []
        }
    }

    static getDerivedStateFromProps(props, state){
        if (props.match.params.wordId !== 'all'){
            return {...state, loadedWords: props.words.filter((word) => word.category === props.match.params.wordId)}
        } else {
            return {...state, loadedWords: props.words}
        } 
    }

    flipCard = (e) => {
        e.preventDefault();
        this.setState({flipped: !this.state.flipped})
    }

    nextCard = (e) => {
        e.preventDefault();
        if (this.props.index === this.props.words.length){
            this.props.setIndex(0)
        } else {
            this.props.setIndex(this.props.index + 1)
        }
    }

    lastCard = (e) => {
        e.preventDefault();
        if (this.props.index === 0){
            this.props.setIndex(this.props.words.length - 1)
        } else {
            this.props.setIndex(this.props.index - 1)
        }
    }


    render(){
        let i = Math.min(this.props.words.length - 1, this.props.index);
        let word = this.props.words[i] || {jpname: 'monkey', jpsentence: 'monkey', definition: 'monke', engsentence: 'monke'};
        
        return(
            <CardStock>
                {this.state.flipped === false ?
                 <CardFace flip={this.flipCard} next={this.nextCard} last={this.lastCard} title={word.jpname} sentence={word.jpsentence} /> : 
                 <CardFace flip={this.flipCard} next={this.nextCard} last={this.lastCard} title={word.definition} sentence={word.engsentence} />}
            </CardStock>
        )
    }
}

const mapStateToProps = state => {
    return {
        words: state.words,
        index: state.index
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setIndex: (i) => dispatch(setIndex(i))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WordCard)