import React, { Component} from 'react';

export default class Words extends Component {

    render(){

        const word = this.props.word

        return(
            <div>
                {/* <h2>{word.jpname}</h2>
                <p>{word.jpsentence}</p> */}
            </div>
        )
    }
}