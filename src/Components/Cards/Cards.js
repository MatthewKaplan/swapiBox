import React from 'react';
import './Cards.scss';

const Card = ({
  name,
  homeworld,
  species,
  population,
  terrain,
  climate,
  residents,
  model,
  starship_class,
  passengers
}) => {
  const peopleCard = (
    <article className="peopleCard card" key={name}>
      <h2>{name}</h2>
      <h3>homeworld: {homeworld}</h3>
      <h3>species: {species}</h3>
      <h3>population: {population}</h3>
      <button className="favorites favorite-button">favorite</button>
    </article>
  );

  const planetCard = (
    <article className="planetCard card" key={name}>
      <h2>{name}</h2>
      <h3>terrain: {terrain}</h3>
      <h3>climate: {climate}</h3>
      <h3>population: {population}</h3>
      <h3 className="residents">residents: {residents}</h3>
      <button className="favorites favorite-button">favorite</button>
    </article>
  );

  const vehicleCard = (
    <article className="vehicleCard card" key={name}>
      <h2>{name}</h2>
      <h3>model: {model}</h3>
      <h3>class: {starship_class}</h3>
      <h3># of passengers: {passengers}</h3>
      <button className="favorites favorite-button">favorite</button>
    </article>
  );

  if (homeworld) {
    return peopleCard;
  } else if (terrain) {
    return planetCard;
  } else {
    return vehicleCard;
  }
};

export default Card;