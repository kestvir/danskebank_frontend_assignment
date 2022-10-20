import { Film, FilmDto } from "@/types";

import { filmsDtoToFilms } from "../filmsDtoToFilms";

describe("filmsDtoToFilms", () => {
  it("converts filmsDto to films", () => {
    const filmsDto: Array<FilmDto> = [
      {
        title: "A New Hope",
        episode_id: 4,
        opening_crawl:
          "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have",
        director: "George Lucas",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
        characters: ["https://swapi.dev/api/people/1/"],
        planets: ["https://swapi.dev/api/planets/1/"],
        starships: ["https://swapi.dev/api/starships/2/"],
        vehicles: ["https://swapi.dev/api/vehicles/4/"],
        species: ["https://swapi.dev/api/species/1/"],
        created: "2014-12-10T14:23:31.880000Z",
        edited: "2014-12-20T19:49:45.256000Z",
        url: "https://swapi.dev/api/films/1/",
      },
    ];

    const expectedResult: Array<Film> = [
      {
        title: "A New Hope",
        episodeId: 4,
        releaseDate: "1977-05-25",
        characters: ["https://swapi.dev/api/people/1/"],
      },
    ];

    expect(filmsDtoToFilms(filmsDto)).toEqual(expectedResult);
  });
});
