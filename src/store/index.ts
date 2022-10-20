import { useDispatch } from "react-redux";
import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";

import { filmsApi } from "../features/films/filmsApi";
import activeFilmReducer from "../features/films/activeFilmSlice";

const rootReducer = combineReducers({
  activeFilm: activeFilmReducer,
  [filmsApi.reducerPath]: filmsApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: {
      activeFilm: activeFilmReducer,
      [filmsApi.reducerPath]: filmsApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(filmsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
