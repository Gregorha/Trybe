import React from 'react';

function Pokemon(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.type}</h3>
      <h3>{`Average weight: ${props.value}${props.measurementUnit}`}</h3>
      <a href={props.moreInfo}>
        <img src={props.image}></img>
      </a>
    </div>
  );
}

export default Pokemon;
