import { cleanPeopleData, cleanVehiclesData, cleanPlanetsData } from "./helpers";

const fetchPeople = () => {
  const url = "https://swapi.co/api/people/";
  return fetch(url)
    .then(response => response.json())
    .then(data => fetchSpecies(data.results))
    .then(results => fetchHomeworld(results))
    .then(finalResults => cleanPeopleData(finalResults))
    .then(cleanedResults => {
      return cleanedResults;
    });
};

const fetchSpecies = people => {
  const species = people.map(person => {
    return fetch(person.species)
      .then(response => response.json())
      .then(result => {
        const newPerson = { ...person, species: result.name };
        return newPerson;
      });
  });
  return Promise.all(species);
};

const fetchHomeworld = people => {
  const homeworld = people.map(person => {
    return fetch(person.homeworld)
      .then(response => response.json())
      .then(result => {
        const finishedPerson = {
          ...person,
          homeworld: result.name,
          population: result.population
        };
        return finishedPerson;
      });
  });
  return Promise.all(homeworld);
};

const fetchVehicles = () => {
  const url = "https://swapi.co/api/starships/";
  return fetch(url)
    .then(response => response.json())
    .then(results => cleanVehiclesData(results.results));
};

const fetchPlanets = () => {
  const url = "https://swapi.co/api/planets/";
  return fetch(url)
    .then(response => response.json())
    .then(results => console.log(results))
}

export { fetchPeople, fetchVehicles, fetchPlanets };
