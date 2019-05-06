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
      <h3>Homeworld: {homeworld}</h3>
      <h3>Species: {species}</h3>
      <h3>Population: {population}</h3>
      <button className="favorites favorite-button">favorite</button>
    </article>
  );

  const planetCard = (
    <article className="planetCard card" key={name}>
      <h2>{name}</h2>
      <h3>Terrain: {terrain}</h3>
      <h3>Climate: {climate}</h3>
      <h3>Population: {population}</h3>
      <h3 className="residents">Residents: {residents}</h3>
      <button className="favorites favorite-button">favorite</button>
    </article>
  );

  const vehicleCard = (
    <article className="vehicleCard card" key={name}>
      <h2>{name}</h2>
      <h3>Model: {model}</h3>
      <h3>Class: {starship_class}</h3>
      <h3>Number of passengers: {passengers}</h3>
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