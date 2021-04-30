import React from 'react';

class Pokemon extends React.Component {
  render(){
    return (      
    <section className='pokemon-card'>
      <h3>Name: {this.props.name}</h3>
      <p>Type: {this.props.type}</p>
      <p>Weight: { this.props.weight } { this.props.unit }</p>
      <img src={ this.props.image }></img>
    </section>
    );
  }
}

export default Pokemon;