import React from 'react';
import './cards.css';

function Card(props) {
    return(
            <div className = 'card'>
                <h1 className = "title">{props.title} </h1>
                <img src={props.imageURL} alt={props.title} className = "pictr"/>
                <p className = "desc">{props.value}</p>
            </div>
    )
}

export default Card;