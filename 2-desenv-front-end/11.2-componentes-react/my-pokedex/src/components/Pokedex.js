import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon'



class Pokedex extends React.Component {

  render() {
    return (
      <div className = 'main'>
        { pokemons.map((poke) => {
          const { name, type, averageWeight:{ value , measurementUnit}, image } = poke;
        
          return <Pokemon name = { name } type = { type } weight = { value } unit = { measurementUnit } image = { image} />
        })}
      </div>
    )
  }
}
export default Pokedex;

