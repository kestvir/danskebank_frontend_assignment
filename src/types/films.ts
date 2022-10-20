export type FilmsResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<FilmDto>;
};

export type FilmDto = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export type Film = {
  title: string;
  episodeId: number;
  releaseDate: string;
  characters: Array<string>;
};

export type PersonDto = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export type Person = {
  birthYear: string;
  gender: string;
  mass: string;
  name: string;
};
