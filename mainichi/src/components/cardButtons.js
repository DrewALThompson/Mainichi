import React from 'react';

export default function CardButtons(props) {

    return(
        <>
            <button type='button' onClick={props.onClick}>{props.children}</button>
        </>
    )
}