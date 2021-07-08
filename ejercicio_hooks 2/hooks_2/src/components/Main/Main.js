import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import PokeLista from '../PokeLista/PokeLista';
import Form from '../Form/Form';
import Details from '../Details/Details'
import './Main.scss';


export default class Main extends Component {
    render() {
        return (
            <main className='Main'>
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={PokeLista} exact />
                        <Route path="/new" component={Form} />
                        <Route path="/pokemon/:id" component={Details} />
                        <Route path="/contact" component={PokeLista} />
                        

                    </Switch>
                </div>
            </main>
        )
    }
}

