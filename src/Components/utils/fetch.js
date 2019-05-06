import {
  cleanPeopleData,
  cleanVehiclesData,
  cleanPlanetsData,
  cleanRandomMovie
} from "./helpers";

const fetchMovies = () => {
  let randomNum = Math.floor(Math.random() * 7) + 1;
  return fetch(`https://swapi.co/api/films/${randomNum}/`)
    .then(response => {
      if (!response.ok) {
        throw Error("Error loading movies");
      } else {
        return response.json();
      }
    })
    .then(result => cleanRandomMovie(result));
};

const fetchPeople = () => {
  const url = "https://swapi.co/api/people/";
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error("Error loading people");
      } else {
        return response.json();
      }
    })
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
      .then(response => {
        if (!response.ok) {
          throw Error("Error loading species");
        } else {
          return response.json();
        }
      })
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
    .then(response => {
      if (!response.ok) {
        throw Error("Error loading vehicles");
      } else {
        return response.json();
      }
    })
    .then(results => cleanVehiclesData(results.results));
};

const fetchPlanets = () => {
  const url = "https://swapi.co/api/planets/";
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error("Error loading planets");
      } else {
        return response.json();
      }
    })
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

export { fetchPeople, fetchVehicles, fetchPlanets, fetchSpecies, fetchMovies };
