import { cleanRandomMovie, cleanPeopleData, cleanVehiclesData, cleanPlanetsData } from './helpers';
import { mockPersonData, mockPlanetData, mockVehicleData, mockFilmData, mockCleanPerson, mockCleanPlanet, mockCleanFilm, mockCleanVehicle } from './mockData';

describe('cleanPeopleData', () => {
  it('should take the raw data and only grab the following properties: name, homeworld, species, and population', () => {
    const person = cleanPeopleData(mockPersonData);
    expect(typeof person).toBe('object');
    expect(person).toEqual(mockCleanPerson);
  });
});

describe('cleanPlanetsData', () => {
  it('should take the raw data and only grab the following properties: name, terrain, climate, population, residents', () => {
    const planet = cleanPlanetsData(mockPlanetData);
    expect(typeof planet).toBe('object');
    expect(planet).toEqual(mockCleanPlanet);
  });
});

describe('cleanRandomMovie', () => {
  it('should take the raw data and only grab the following properties: summary, title, and release date', () => {
    const film = cleanRandomMovie(mockFilmData);
    expect(typeof film).toBe('object')
    expect(film).toEqual(mockCleanFilm);
  });
});

describe('cleanVehiclesData', () => {
  it('should take the raw data and only grab the following properties: name, model, class, and passengers', () => {
    const starship = cleanVehiclesData(mockVehicleData);
    expect(typeof starship).toBe('object');
    expect(starship).toEqual(mockCleanVehicle);
  });
});