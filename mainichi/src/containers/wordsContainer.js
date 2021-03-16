import React, { Component } from 'react';
import Word from '../components/word.js'
import Words from '../components/words.js'

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

    

    render(){
        return(
            <div>
               
            </div>
        )
    }
}

// 'http://localhost:3000'
// handleOnClick = (e) => {
//         e.preventDefault();
//         let load = this.state.words.filter((word) => word.category === e.target.name);
//         this.setState({loadedWords: load})
//         console.log(this.state.loadedWords)
//     }