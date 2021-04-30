import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>Name: {name} </p>
          <p>Type: {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img className="pokemon-image" src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes ={
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.number,
  image:  PropTypes.string
}.isRequired;


export default Pokemon;