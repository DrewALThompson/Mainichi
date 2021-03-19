import React, { Component } from 'react';
import styled from 'styled-components';
import CardFront from '../components/cardFront';
import CardBack from '../components/cardBack';

// let {wordId} = useParams();
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            flipped: false
        }
    }


    render(){
        return(
            <div>

            </div>
        )
    }
}