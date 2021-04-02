import React, { Component } from 'react';
import styled from 'styled-components';
import CardFaceUserword from '../components/cardFaceUserword';
import { connect } from 'react-redux';
import NewWordForm from '../components/newWordForm'

const CardStock = styled.div`
    display: flex;
    justify-content: center;
    border: white solid 2px;
    width: 400px;
    height 224px;

`

class UserwordsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            flipped: false,
            loadedWords: this.props.userwords
        }
    }

    flipCard = (e) => {
        e.preventDefault();
        this.setState({flipped: !this.state.flipped})
    }

    removeCard = (e) => {
        e.preventDefault();
    }


    render(){

        let words = this.state.loadedWords.map((word) => {
            return (<CardStock>
                {this.state.flipped === false ?
                <CardFaceUserword flip={this.flipCard} removeCard={this.removeCard} title={word.jpname} sentence={word.jpsentence} /> : 
                <CardFaceUserword flip={this.flipCard} removeCard={this.removeCard} title={word.definition} sentence={word.engsentence} />}
            </CardStock>)
        })

        console.log(this.state.loadedWords)
        
        return(
            <>
                {words}
                <NewWordForm />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        userwords: state.user.userwords
    };
};



export default connect(mapStateToProps)(UserwordsContainer)