import {
  cleanPeopleData,
  cleanVehiclesData,
  cleanPlanetsData
} from "./helpers";

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
          population: result.population,
          imageArr: [
            "https://www.google.com/search?q=luke+skywalker+transparent&client=firefox-b-1-d&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiO8f7rnobiAhUB0KwKHUtTBOsQ_AUIDigB&biw=2560&bih=1343#imgrc=k2i_e8hLje5otM:"
          ]
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
    .then(results => fetchResidentsInPlanets(results.results))
    .then(names => cleanPlanetsData(names));
};

const fetchResidentsInPlanets = planets => {
  const mapPlanets = planets.map(planet => {
    return mapResidents(planet).then(residentData => ({
      ...planet,
      residents: residentData
    }));
  });
  return Promise.all(mapPlanets);
};

const mapResidents = planet => {
  const residentArray = planet.residents.map(resident => {
    return fetchResidents(resident);
  });
  return Promise.all(residentArray);
};

const fetchResidents = resident => {
  return fetch(resident).then(response => response.json());
};

export { fetchPeople, fetchVehicles, fetchPlanets };
