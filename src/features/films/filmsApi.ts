import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Person, PersonDto, Film, FilmsResponse } from "../../types";
import { filmsDtoToFilms, personDtoToPerson } from "../../utils";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getFilms: builder.query<Array<Film>, void>({
      query: () => "/films",
      transformResponse: (rawResult: FilmsResponse) => {
        return filmsDtoToFilms(rawResult.results);
      },
    }),
    getPerson: builder.query<Person, { url: string }>({
      query: ({ url }) => url,
      transformResponse: (rawResult: PersonDto) => {
        return personDtoToPerson(rawResult);
      },
    }),
  }),
});

export const { useGetFilmsQuery, useGetPersonQuery } = filmsApi;
