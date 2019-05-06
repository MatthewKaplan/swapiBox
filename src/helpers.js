const cleanRandomMovie = data => {
  const movieInfo = {
    summary: data.opening_crawl,
    title: data.title,
    releaseDate: data.release_date
  };
  return movieInfo;
};

const cleanPeopleData = data => {
  const peopleInfo = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species,
      population: person.population
    };
  });
  console.log(peopleInfo);
  return peopleInfo;
};

const cleanVehiclesData = data => {
  const vehicleInfo = data.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      starship_class: vehicle.starship_class,
      passengers: vehicle.passengers
    };
  });
  console.log('vehicleInfo', vehicleInfo);
  return vehicleInfo;
};

const cleanPlanetsData = data => {
  const planetInfo = data.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population,
      residents: planet.residents.map(resident => resident.name)
    };
  });
  console.log('planetInfo', planetInfo);
  return planetInfo;
};

export {
  cleanRandomMovie,
  cleanPeopleData,
  cleanVehiclesData,
  cleanPlanetsData
};
