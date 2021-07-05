import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card/Card';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "",
      name: "",
      visible: false
    };
  }

  handleChangePokemon = (event) => {
    this.setState({name:event.target.value});
  }

  handleSubmit = async event => {
      event.preventDefault(); 
      /* const pokemon = {
        name: this.state.name
      }  */
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.name}/`)
    console.log(res);
    console.log(res.data);
    this.setState({data:res.data});
  }

  componentDidUpdate(prevProp,prevState){
    if(this.state.data !== prevState.data){
      // console.log('pokemon************')
       this.setState({visible:true}) 
    }
  }
  /* paintCards = () => 
    this.state.pokemon.map((pokemon,index) => <Card pokemon={pokemon} key={index}/>); */



  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
                <label>
                  Nombre: 
                  </label>
                <input type="text" name="user" onChange={this.handleChangePokemon}/>
                <button className="button" type="submit">ENVIAR</button>
            </form>
            {this.state.visible?<Card data={this.state.data}/>: <p>Busca un pokemon</p>}
      </section>
    );
  }

  }  
  


export default Input;