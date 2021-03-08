import React, { Component, Suspense } from 'react';
import Word from './components/words.js'

export default class WordsContainer extends Component {
    constructor(props){       
        super(props)
    }

    render(){
        return(
            <div>
                < Word />
            </div>
        )
    }
}