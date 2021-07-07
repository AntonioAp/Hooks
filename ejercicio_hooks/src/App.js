import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pokelista from './components/PokeLista/PokeLista';






function App() {
  const [pokemon, setPokemon] = useState([]); //inicializamos el estado donde se guardará la lista de pokemon
  const [input, setInput] = useState(""); //inicializamos el estado para guardar el valor introducido en el input

  const handleChange = (e) => {
    let value = e.target.value; //capturamos el valor introducido en input
    setInput(value); //y establecemos un nuevo state con el valor capturado y esto hace que se almacene automáticamente en input
    console.log(value);
  };

  const getPokemon = () => {
    //función para obtener los resultados de la búsqueda de la api y almacenarla en el state
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`).then((res) => {
      console.log(res.data);

      setPokemon([...pokemon, res.data]); //gurdamos en el estado de pokemon lo que tenemos más el resultado de la api
      console.log(pokemon);//contine el resultado de input y de la api

      setInput(""); //actualizamos el state del input a vacio
    });
  };

  return (
    <div>
      <label htmlFor="Bucador">Buscar Pokemon</label>
      <input type="text" name="buscador" onChange={handleChange} />
      <button onClick={getPokemon}>Buscar</button>
      <div>
        <Pokelista data={pokemon}/>
      </div>
    </div>
    
  );
}

export default App;