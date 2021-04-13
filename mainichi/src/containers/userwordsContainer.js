import React, { Component } from 'react';
import styled from 'styled-components';
import CardFaceUserword from '../components/cardFaceUserword';
import { connect } from 'react-redux';
import NewWordForm from '../components/newWordForm';
import Counter from '../components/counter';
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

class UserwordsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            flipped: false
        }
    }


    flipCard = (e) => {
        e.preventDefault();
        this.setState({flipped: !this.state.flipped})
    }

    nextCard = (e) => {
        e.preventDefault();
        if (this.props.index >= this.props.userwords.length - 1){
            this.props.setIndex(0)
            this.setState({flipped: false})
        } else {
            this.props.setIndex(this.props.index + 1)
            this.setState({flipped: false})
        }
    }

    lastCard = (e) => {
        e.preventDefault();
        if (this.props.index === 0){
            this.props.setIndex(this.props.userwords.length - 1)
            this.setState({flipped: false})
        } else {
            this.props.setIndex(this.props.index - 1)
            this.setState({flipped: false})
        }
    }

    removeCard = (e) => {
        e.preventDefault();
    }


    render(){

        let i = Math.min(this.props.userwords.length - 1, this.props.index);
        let word = this.props.userwords[i];
        
        return(
            <>
                <CardStock>
                    {this.state.flipped === false ?
                    <CardFaceUserword flip={this.flipCard} next={this.nextCard} last={this.lastCard} remove={this.removeCard} title={word.jpname} sentence={word.jpsentence} /> : 
                    <CardFaceUserword flip={this.flipCard} next={this.nextCard} last={this.lastCard} remove={this.removeCard} title={word.definition} sentence={word.engsentence} />}
                    <Counter wordIndex={this.props.index} wordsLength={this.props.userwords.length} />
                </CardStock>
                <NewWordForm/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        index: state.index,
        userwords: state.user.userwords,
        message: state.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setIndex: (i) => dispatch(setIndex(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserwordsContainer)