import React, { Component} from 'react';

export default class Words extends Component {

    render(){

        let presentation = this.props.words.map((word)=>(word.jpname));

        return(
            <div className='words-side'>
                {presentation}
            </div>
        )
    }
}