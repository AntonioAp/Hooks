import React from 'react';
import Card from '../Card/Card'
import './PokeLista.css';




function PokeLista(props) {//en props traemos de app pokemon que contiene el resultado del fetch y del input

  console.log(props)


  return (
    <div>
       {props.data.map((element) => {//dentro de props (objeto global) cogemos data(parte del objeto que contiene la info que queremos) y le haces un map

         return (//devolvemos las iteraciones del map
           <>
           {/* <h2>{element.name}</h2> */}
           <Card 
           name={element.name} 
           foto={element.sprites.front_default}/>
           </>
         )

       })}
      
    </div>
  )
}

export default PokeLista;
