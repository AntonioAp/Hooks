import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';


export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="mainNav">
          <div className="container">
            <ul>
              <li>
              <Link to="/">Lista</Link>
              </li>
              <li>
              <Link to="/new">Añadir formulario</Link>
              </li>
              <li>
              <Link to="/pokemon/:id">Tarjeta Pokemon</Link>
              </li>
              <li>
              <Link to="/search">Buscar Pokemon</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}





