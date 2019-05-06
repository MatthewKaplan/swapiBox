import React from 'react';
import { cleanRandomMovie, cleanPeopleData, cleanVehiclesData, cleanPlanetsData } from './helpers';
import { mockVehicleData, mockFilmData, mockCleanPerson, mockCleanPlanet, mockCleanFilm, mockCleanVehicle, mockCompleteRawPersonData, mockRawPersonData } from './mockData';
import { fetchPeople, fetchSpecies, fetchHomeworld, fetchVehicles, fetchPlanets, fetchResidentsInPlanets, mapResidents, fetchResidents, fetchMovies} from './fetch';


describe('fetchMovies', () => {
  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      });
    });
  });

  it.skip('should call fetch with the right parameters', () => {
    fetchMovies();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/people/")
  });

  it("should return an error is the status is not OK", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    await expect(fetchMovies()).rejects.toEqual(Error('Error loading movies'))
  });
});

describe('fetchPeople', () => {
  let mockFetchHomeworld;
  let mockFetchSpecies;
  let mockCleanPeopleData;
  beforeEach(() => {

    mockFetchSpecies = jest.fn().mockImplementation(() => Promise.resolve(1))
    mockFetchHomeworld = jest.fn().mockImplementation(() => Promise.resolve(2))

    mockCleanPeopleData = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      { json: () => Promise.resolve(mockCompleteRawPersonData) }
    ))
  });

  it('should call fetch with the right parameters', () => {
    fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(`https://swapi.co/api/people/`)
  });

  it("should return an error is the status is not OK", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    await expect(fetchPeople()).rejects.toEqual(Error('Error loading people'))
  });
});

describe('fetchVehicles', () => {
  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      });
    });
  });

  it('should call fetch with the right parameters', () => {
    fetchVehicles();
    expect(window.fetch).toHaveBeenCalledWith(`https://swapi.co/api/starships/`)
  });

  it("should return an error is the status is not OK", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    await expect(fetchVehicles()).rejects.toEqual(Error('Error loading vehicles'))
  });
});

describe('fetchPlanets', () => {
  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      });
    });
  });

  it('should call fetch with the right parameters', () => {
    fetchPlanets();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/planets/")
  });

  it("should return an error is the status is not OK", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    await expect(fetchPlanets()).rejects.toEqual(Error('Error loading planets'))
  });
});