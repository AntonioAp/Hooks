import React from 'react';
import './Card.css';

function Card(props) {

  return (
      
      <>
        <h3>Nombre: {props.name}</h3>   
        <img src={props.foto} alt={props.foto}  />   
      </>)
}

export default Card;


