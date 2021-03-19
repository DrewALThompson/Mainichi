import React, { Component } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Word(props) {

    let {wordId} = useParams();


    return(
        <div>
            <h3>{wordId}</h3>
            <ul>
               {} 
            </ul>
        </div>
    )
}