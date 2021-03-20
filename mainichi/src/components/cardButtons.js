import React from 'react';
import styled from 'styled-components';

export default function CardButtons(props) {

    return(
        <>
            <button type='button' onClick={props.onClick}>{props.children}</button>
        </>
    )
}