import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WordRoutes from '../components/wordRoutes';
import {fetchWords}  from '../actions/fetchWords'

class WordsContainer extends Component {
    
    componentWillMount(){
        this.props.fetchWords()
    }

    render(){
        return(
            <>
                <WordRoutes />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        words: state.words
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWords: () => dispatch(fetchWords())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsContainer)
