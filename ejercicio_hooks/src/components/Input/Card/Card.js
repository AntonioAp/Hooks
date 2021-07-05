import React from 'react';
import './Card.css';

function Card(props) {
  return (
      
      <>
        <h3>Nombre:{props.data.name}</h3> 
        <h3>Tamaño:{props.data.size}</h3>   
        <img src={props.data.sprites.front_default} alt="foto"  /> 
      </>)
}

export default Card


