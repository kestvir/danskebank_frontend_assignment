import { Person, PersonDto } from "@/types";

export const personDtoToPerson = (personDto: PersonDto): Person => {
  const { birth_year, gender, name, mass } = personDto;
  const person: Person = { birthYear: birth_year, gender, name, mass };

  return person;
};
