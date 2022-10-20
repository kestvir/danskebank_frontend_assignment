import { Person, PersonDto } from "@/types";

import { personDtoToPerson } from "../personDtoToPerson";

describe("personDtoToPerson", () => {
  it("converts person DTO to person", () => {
    const personDto: PersonDto = {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: ["https://swapi.dev/api/films/1/"],
      species: [],
      vehicles: ["https://swapi.dev/api/vehicles/14/"],
      starships: ["https://swapi.dev/api/starships/12/"],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    };

    const expectedResult: Person = {
      name: "Luke Skywalker",
      birthYear: "19BBY",
      gender: "male",
      mass: "77",
    };

    expect(personDtoToPerson(personDto)).toEqual(expectedResult);
  });
});
