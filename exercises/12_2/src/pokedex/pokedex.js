import React from 'react';
import pokemons from '../data';
import Pokemon from './pokemon.js';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {pokemons.map(pokemon => {
          const {
            id,
            name,
            type,
            averageWeight: { value, measurementUnit },
            image,
            moreInfo,
          } = pokemon;
          return <Pokemon key = {id} id = {id} name = {name} type = {type} value = {value} measurementUnit = {measurementUnit} image = {image} moreInfo = {moreInfo} />;
        })}
      </div>
    );
  }
}

export default Pokedex