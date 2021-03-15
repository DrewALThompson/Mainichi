import React, { Component } from 'react';
import Word from '../components/word.js'
import Words from '../components/words.js'
import WordSelector from '../components/wordSelector'

export default class WordsContainer extends Component {
    constructor(props){       
        super(props)
        this.state = {
            wordIDX: 0,
            words: [
                {jpname: "太陽" , definition: 'sun', jpsentence: '太陽が熱いです', engsentence: 'the sun is hot', category: 'n1'},
                {jpname: "記憶" , definition: 'memory', jpsentence: '記憶が経ている', engsentence: 'memory is going bad', category: 'n3'},
                {jpname: "ながる" , definition: 'to punch', jpsentence: '壁をながした', engsentence: 'he punched the wall', category: 'n3'}
            ],
            loadedWords: null
        }
    }

    // componentDidMount(){
    //     if (this.state.words === []){
    //         fetch('http://localhost:3000')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({words: json.words})
    //         })
    //     }
    // }

    handleOnClick = (e) => {
        e.preventDefault();
        let load = this.state.words.filter((word) => word.category === e.target.name);
        this.setState({loadedWords: load})
        console.log(this.state.loadedWords)
    }

    handleNextClick = e => {
        e.preventDefault();

    }

    

    render(){

        let wordsLoaded;
        if (this.state.loadedWords !== null){
            wordsLoaded = true;
        } else {
            wordsLoaded = false;
        }
        console.log(this.state.loadedWords)
        // <Words words={this.state.loadedWords} />
        return(
            <div>
                { wordsLoaded ? <Word words={this.state.loadedWords} /> : <WordSelector onClick={this.handleOnClick}/>}
            </div>
        )
    }
}

// 'http://localhost:3000'