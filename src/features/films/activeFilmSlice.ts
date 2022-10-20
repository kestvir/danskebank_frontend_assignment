import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { Film } from "@/types";

import { RootState } from "../../store";

type ActiveFilmState = {
  title: string;
  peopleUrls: Array<string>;
};

const initialState = { title: "", peopleUrls: [] } as ActiveFilmState;

const activeFilmSlice = createSlice({
  name: "activeFilm",
  initialState,
  reducers: {
    setActiveFilm(
      state,
      action: PayloadAction<Pick<Film, "title" | "characters">>
    ) {
      const { title, characters } = action.payload;

      state.title = title;
      state.peopleUrls = characters;
    },
  },
});

// ACTIONS
export const { setActiveFilm } = activeFilmSlice.actions;

// SELECTORS
export const selectActiveFilmTitle = (state: RootState) =>
  state.activeFilm.title;
export const selectActiveFilmPeopleUrls = (state: RootState) =>
  state.activeFilm.peopleUrls;

// REDUCER
export default activeFilmSlice.reducer;
