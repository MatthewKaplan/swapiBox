/*----------- PERSON MOCK DATA -----------*/

const mockPersonData = [
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "Tatooine",
    population: "200000",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: "Human",
    vehicles: [],
    starships: ["https://swapi.co/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.co/api/people/4/"
  }
];

const mockRawPersonData = [
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: ["https://swapi.co/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.co/api/people/4/"
  }
];

const mockCleanPerson = [
  {
    name: "Darth Vader",
    homeworld: "Tatooine",
    species: "Human",
    population: "200,000"
  }
];

const mockCompleteRawPersonData = {
  count: 87,
  next: "https://swapi.co/api/people/?page=2",
  previous: null,
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      population: "200000",
      homeworld: "https://swapi.co/api/planets/1/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
      ],
      starships: [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.co/api/people/1/"
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      population: "200000",
      gender: "n/a",
      homeworld: "https://swapi.co/api/planets/1/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
      ],
      species: ["https://swapi.co/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:10:51.357000Z",
      edited: "2014-12-20T21:17:50.309000Z",
      url: "https://swapi.co/api/people/2/"
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      population: "200000",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.co/api/planets/8/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      species: ["https://swapi.co/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      url: "https://swapi.co/api/people/3/"
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      population: "200000",
      gender: "male",
      homeworld: "https://swapi.co/api/planets/1/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: [],
      starships: ["https://swapi.co/api/starships/13/"],
      created: "2014-12-10T15:18:20.704000Z",
      edited: "2014-12-20T21:17:50.313000Z",
      url: "https://swapi.co/api/people/4/"
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      population: "200000",
      birth_year: "19BBY",
      gender: "female",
      homeworld: "https://swapi.co/api/planets/2/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: ["https://swapi.co/api/vehicles/30/"],
      starships: [],
      created: "2014-12-10T15:20:09.791000Z",
      edited: "2014-12-20T21:17:50.315000Z",
      url: "https://swapi.co/api/people/5/"
    },
    {
      name: "Owen Lars",
      height: "178",
      mass: "120",
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male",
      homeworld: "https://swapi.co/api/planets/1/",
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/1/"
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: [],
      population: "200000",
      starships: [],
      created: "2014-12-10T15:52:14.024000Z",
      edited: "2014-12-20T21:17:50.317000Z",
      url: "https://swapi.co/api/people/6/"
    },
    {
      name: "Beru Whitesun lars",
      height: "165",
      mass: "75",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female",
      population: "200000",
      homeworld: "https://swapi.co/api/planets/1/",
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/1/"
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:53:41.121000Z",
      edited: "2014-12-20T21:17:50.319000Z",
      url: "https://swapi.co/api/people/7/"
    },
    {
      name: "R5-D4",
      height: "97",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, red",
      eye_color: "red",
      birth_year: "unknown",
      gender: "n/a",
      population: "200000",
      homeworld: "https://swapi.co/api/planets/1/",
      films: ["https://swapi.co/api/films/1/"],
      species: ["https://swapi.co/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:57:50.959000Z",
      edited: "2014-12-20T21:17:50.321000Z",
      url: "https://swapi.co/api/people/8/"
    },
    {
      name: "Biggs Darklighter",
      height: "183",
      mass: "84",
      hair_color: "black",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "24BBY",
      gender: "male",
      population: "200000",
      homeworld: "https://swapi.co/api/planets/1/",
      films: ["https://swapi.co/api/films/1/"],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: [],
      starships: ["https://swapi.co/api/starships/12/"],
      created: "2014-12-10T15:59:50.509000Z",
      edited: "2014-12-20T21:17:50.323000Z",
      url: "https://swapi.co/api/people/9/"
    },
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
      population: "200000",
      homeworld: "https://swapi.co/api/planets/20/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: ["https://swapi.co/api/vehicles/38/"],
      starships: [
        "https://swapi.co/api/starships/48/",
        "https://swapi.co/api/starships/59/",
        "https://swapi.co/api/starships/64/",
        "https://swapi.co/api/starships/65/",
        "https://swapi.co/api/starships/74/"
      ],
      created: "2014-12-10T16:16:29.192000Z",
      edited: "2014-12-20T21:17:50.325000Z",
      url: "https://swapi.co/api/people/10/"
    }
  ]
};

const mockFetchHomeworld = [
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    // homeworld: mockRawPlanetData(),
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: { name: "Human" },
    vehicles: [],
    starships: ["https://swapi.co/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.co/api/people/4/"
  }
];

/*------------ MOCK PLANET DATA -------------*/

const mockCompleteRawPlanetData = {
  count: 61,
  next: "https://swapi.co/api/planets/?page=2",
  previous: null,
  results: [
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ],
      films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
      created: "2014-12-10T11:35:48.479000Z",
      edited: "2014-12-20T20:58:18.420000Z",
      url: "https://swapi.co/api/planets/2/"
    },
    {
      name: "Yavin IV",
      rotation_period: "24",
      orbital_period: "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      surface_water: "8",
      population: "1000",
      residents: [],
      films: ["https://swapi.co/api/films/1/"],
      created: "2014-12-10T11:37:19.144000Z",
      edited: "2014-12-20T20:58:18.421000Z",
      url: "https://swapi.co/api/planets/3/"
    },
    {
      name: "Hoth",
      rotation_period: "23",
      orbital_period: "549",
      diameter: "7200",
      climate: "frozen",
      gravity: "1.1 standard",
      terrain: "tundra, ice caves, mountain ranges",
      surface_water: "100",
      population: "unknown",
      residents: [],
      films: ["https://swapi.co/api/films/2/"],
      created: "2014-12-10T11:39:13.934000Z",
      edited: "2014-12-20T20:58:18.423000Z",
      url: "https://swapi.co/api/planets/4/"
    },
    {
      name: "Dagobah",
      rotation_period: "23",
      orbital_period: "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamp, jungles",
      surface_water: "8",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      created: "2014-12-10T11:42:22.590000Z",
      edited: "2014-12-20T20:58:18.425000Z",
      url: "https://swapi.co/api/planets/5/"
    },
    {
      name: "Bespin",
      rotation_period: "12",
      orbital_period: "5110",
      diameter: "118000",
      climate: "temperate",
      gravity: "1.5 (surface), 1 standard (Cloud City)",
      terrain: "gas giant",
      surface_water: "0",
      population: "6000000",
      residents: ["https://swapi.co/api/people/26/"],
      films: ["https://swapi.co/api/films/2/"],
      created: "2014-12-10T11:43:55.240000Z",
      edited: "2014-12-20T20:58:18.427000Z",
      url: "https://swapi.co/api/planets/6/"
    },
    {
      name: "Endor",
      rotation_period: "18",
      orbital_period: "402",
      diameter: "4900",
      climate: "temperate",
      gravity: "0.85 standard",
      terrain: "forests, mountains, lakes",
      surface_water: "8",
      population: "30000000",
      residents: ["https://swapi.co/api/people/30/"],
      films: ["https://swapi.co/api/films/3/"],
      created: "2014-12-10T11:50:29.349000Z",
      edited: "2014-12-20T20:58:18.429000Z",
      url: "https://swapi.co/api/planets/7/"
    },
    {
      name: "Naboo",
      rotation_period: "26",
      orbital_period: "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: "12",
      population: "4500000000",
      residents: [
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/36/",
        "https://swapi.co/api/people/37/",
        "https://swapi.co/api/people/38/",
        "https://swapi.co/api/people/39/",
        "https://swapi.co/api/people/42/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/61/",
        "https://swapi.co/api/people/66/",
        "https://swapi.co/api/people/35/"
      ],
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      created: "2014-12-10T11:52:31.066000Z",
      edited: "2014-12-20T20:58:18.430000Z",
      url: "https://swapi.co/api/planets/8/"
    },
    {
      name: "Coruscant",
      rotation_period: "24",
      orbital_period: "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      surface_water: "unknown",
      population: "1000000000000",
      residents: [
        "https://swapi.co/api/people/34/",
        "https://swapi.co/api/people/55/",
        "https://swapi.co/api/people/74/"
      ],
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      created: "2014-12-10T11:54:13.921000Z",
      edited: "2014-12-20T20:58:18.432000Z",
      url: "https://swapi.co/api/planets/9/"
    },
    {
      name: "Kamino",
      rotation_period: "27",
      orbital_period: "463",
      diameter: "19720",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "ocean",
      surface_water: "100",
      population: "1000000000",
      residents: [
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/72/",
        "https://swapi.co/api/people/73/"
      ],
      films: ["https://swapi.co/api/films/5/"],
      created: "2014-12-10T12:45:06.577000Z",
      edited: "2014-12-20T20:58:18.434000Z",
      url: "https://swapi.co/api/planets/10/"
    },
    {
      name: "Geonosis",
      rotation_period: "30",
      orbital_period: "256",
      diameter: "11370",
      climate: "temperate, arid",
      gravity: "0.9 standard",
      terrain: "rock, desert, mountain, barren",
      surface_water: "5",
      population: "100000000000",
      residents: ["https://swapi.co/api/people/63/"],
      films: ["https://swapi.co/api/films/5/"],
      created: "2014-12-10T12:47:22.350000Z",
      edited: "2014-12-20T20:58:18.437000Z",
      url: "https://swapi.co/api/planets/11/"
    }
  ]
};

const mockPlanetData = [
  {
    name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grasslands, mountains",
    surface_water: "40",
    population: "2000000000",
    residents: [
      { name: "Leia Organa", height: "150", mass: "49", hair_color: "brown" },
      {
        name: "Bail Prestor Organa",
        height: "191",
        mass: "unknown",
        hair_color: "black"
      },
      {
        name: "Raymus Antilles",
        height: "188",
        mass: "79",
        hair_color: "brown"
      }
    ],
    films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
    created: "2014-12-10T11:35:48.479000Z",
    edited: "2014-12-20T20:58:18.420000Z",
    url: "https://swapi.co/api/planets/2/"
  }
];

const mockCleanPlanet = [
  {
    name: "Alderaan",
    terrain: "grasslands, mountains",
    climate: "temperate",
    population: "2,000,000,000",
    residents: ["Leia Organa", ", Bail Prestor Organa", ", Raymus Antilles"]
  }
];

const mockRawPlanetData = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: [
    "https://swapi.co/api/people/1/",
    "https://swapi.co/api/people/2/",
    "https://swapi.co/api/people/4/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/8/",
    "https://swapi.co/api/people/9/",
    "https://swapi.co/api/people/11/",
    "https://swapi.co/api/people/43/",
    "https://swapi.co/api/people/62/"
  ],
  films: [
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/"
  ],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-21T20:48:04.175778Z",
  url: "https://swapi.co/api/planets/1/"
};

/*------------ MOCK VEHICLE DATA -------------*/

const mockVehicleData = [
  {
    name: "Executor",
    model: "Executor-class star dreadnought",
    manufacturer: "Kuat Drive Yards, Fondor Shipyards",
    cost_in_credits: "1143350000",
    length: "19000",
    max_atmosphering_speed: "n/a",
    crew: "279144",
    passengers: "38000",
    cargo_capacity: "250000000",
    consumables: "6 years",
    hyperdrive_rating: "2.0",
    MGLT: "40",
    starship_class: "Star dreadnought",
    pilots: [],
    films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/"],
    created: "2014-12-15T12:31:42.547000Z",
    edited: "2017-04-19T10:56:06.685592Z",
    url: "https://swapi.co/api/starships/15/"
  }
];

const mockCleanVehicle = [
  {
    name: "Executor",
    model: "Executor-class star dreadnought",
    starship_class: "Star dreadnought",
    passengers: "38,000"
  }
];

/*------------ MOCK FILM DATA -------------*/

const mockFilmData = {
  title: "Attack of the Clones",
  episode_id: 2,
  opening_crawl: "Movie Text",
  director: "George Lucas",
  producer: "Rick McCallum",
  release_date: "2002-05-16",
  characters: [
    "https://swapi.co/api/people/2/",
    "https://swapi.co/api/people/3/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/10/",
    "https://swapi.co/api/people/11/",
    "https://swapi.co/api/people/20/",
    "https://swapi.co/api/people/21/",
    "https://swapi.co/api/people/22/",
    "https://swapi.co/api/people/33/",
    "https://swapi.co/api/people/36/",
    "https://swapi.co/api/people/40/",
    "https://swapi.co/api/people/43/",
    "https://swapi.co/api/people/46/",
    "https://swapi.co/api/people/51/",
    "https://swapi.co/api/people/52/",
    "https://swapi.co/api/people/53/",
    "https://swapi.co/api/people/58/",
    "https://swapi.co/api/people/59/",
    "https://swapi.co/api/people/60/",
    "https://swapi.co/api/people/61/",
    "https://swapi.co/api/people/62/",
    "https://swapi.co/api/people/63/",
    "https://swapi.co/api/people/64/",
    "https://swapi.co/api/people/65/",
    "https://swapi.co/api/people/66/",
    "https://swapi.co/api/people/67/",
    "https://swapi.co/api/people/68/",
    "https://swapi.co/api/people/69/",
    "https://swapi.co/api/people/70/",
    "https://swapi.co/api/people/71/",
    "https://swapi.co/api/people/72/",
    "https://swapi.co/api/people/73/",
    "https://swapi.co/api/people/74/",
    "https://swapi.co/api/people/75/",
    "https://swapi.co/api/people/76/",
    "https://swapi.co/api/people/77/",
    "https://swapi.co/api/people/78/",
    "https://swapi.co/api/people/82/",
    "https://swapi.co/api/people/35/"
  ],
  planets: [
    "https://swapi.co/api/planets/8/",
    "https://swapi.co/api/planets/9/",
    "https://swapi.co/api/planets/10/",
    "https://swapi.co/api/planets/11/",
    "https://swapi.co/api/planets/1/"
  ],
  starships: [
    "https://swapi.co/api/starships/21/",
    "https://swapi.co/api/starships/39/",
    "https://swapi.co/api/starships/43/",
    "https://swapi.co/api/starships/47/",
    "https://swapi.co/api/starships/48/",
    "https://swapi.co/api/starships/49/",
    "https://swapi.co/api/starships/32/",
    "https://swapi.co/api/starships/52/",
    "https://swapi.co/api/starships/58/"
  ],
  vehicles: [
    "https://swapi.co/api/vehicles/4/",
    "https://swapi.co/api/vehicles/44/",
    "https://swapi.co/api/vehicles/45/",
    "https://swapi.co/api/vehicles/46/",
    "https://swapi.co/api/vehicles/50/",
    "https://swapi.co/api/vehicles/51/",
    "https://swapi.co/api/vehicles/53/",
    "https://swapi.co/api/vehicles/54/",
    "https://swapi.co/api/vehicles/55/",
    "https://swapi.co/api/vehicles/56/",
    "https://swapi.co/api/vehicles/57/"
  ],
  species: [
    "https://swapi.co/api/species/32/",
    "https://swapi.co/api/species/33/",
    "https://swapi.co/api/species/2/",
    "https://swapi.co/api/species/35/",
    "https://swapi.co/api/species/6/",
    "https://swapi.co/api/species/1/",
    "https://swapi.co/api/species/12/",
    "https://swapi.co/api/species/34/",
    "https://swapi.co/api/species/13/",
    "https://swapi.co/api/species/15/",
    "https://swapi.co/api/species/28/",
    "https://swapi.co/api/species/29/",
    "https://swapi.co/api/species/30/",
    "https://swapi.co/api/species/31/"
  ],
  created: "2014-12-20T10:57:57.886000Z",
  edited: "2015-04-11T09:45:01.623982Z",
  url: "https://swapi.co/api/films/5/"
};

const mockCleanFilm = {
  summary: "Movie Text",
  title: "Attack of the Clones",
  releaseDate: "2002-05-16"
};

module.exports = {
  mockPersonData,
  mockPlanetData,
  mockVehicleData,
  mockFilmData,
  mockCleanPerson,
  mockCleanPlanet,
  mockCleanFilm,
  mockCleanVehicle,
  mockCompleteRawPersonData,
  mockRawPersonData,
  mockFetchHomeworld,
  mockCompleteRawPlanetData,
  mockRawPlanetData
};
