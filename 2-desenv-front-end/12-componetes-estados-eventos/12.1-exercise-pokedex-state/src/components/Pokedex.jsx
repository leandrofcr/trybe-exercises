import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  constructor(props) {
    super();  
    this.state = {
      index: 0,
      pokemonList: props.pokemons
    };
  }
    
    nextPokemon = () => {
      if (this.state.index === this.state.pokemonList.length - 1) {
        this.setState({
          index: 0
        });        
      } else {
        this.setState((oldState) => ({
          index: oldState.index + 1
        }));
      }
    }
    
    firePokemons = () => {
      this.setState({
        index: 0
      });  
      this.setState({
        pokemonList:this.props.pokemons.filter((pkm)=> pkm.type === 'Fire')
      });     
    }
    psychicPokemons = () =>{
      this.setState({
        index: 0
      });  
      this.setState({
        pokemonList:this.props.pokemons.filter((pkm)=> pkm.type === 'Psychic')
      });   

    }
  
    render() {
      const { index, pokemonList } = this.state;

      return (
        <div>
          <div className="pokedex">
            <Pokemon key={pokemonList[index].id} pokemon={pokemonList[index]} />
          </div>
          <div className='buttons'>
            <button className='next-btn' onClick={this.nextPokemon}>Next</button>
            <button className='fire-btn' onClick={this.firePokemons}>Fire</button>
            <button className='phychic-btn' onClick={this.psychicPokemons}>Psychic</button>
          </div>
        </div>
      );
    }   
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf

}.isRequired;

export default Pokedex;
