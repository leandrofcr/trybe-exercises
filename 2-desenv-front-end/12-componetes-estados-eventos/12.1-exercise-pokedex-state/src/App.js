import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="main-title"> Pokedex </h1>
      </header>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;