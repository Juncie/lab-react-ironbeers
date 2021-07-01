import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import { Switch, Route, Link } from 'react-router-dom'


//https://ih-beers-api2.herokuapp.com/beers

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
      <Route exact path="/beer-details" render={(props) => <SingleBeer {...props} />} />
      <Route exact path="/make-new-beer" render={(props) => <NewBeer {...props} />} />
      <Route exact path="/all-beers" render={(props) => <Beers {...props} />} />
    </Switch>
    </div>
  );
}

export default App;
