import { useSelector } from "react-redux";

import { Film } from "../../../types";
import { useAppDispatch } from "../../../store";

import {
  selectActiveFilmTitle,
  setActiveFilm as setActiveFilmAction,
} from "../activeFilmSlice";

type FilmItemProps = {
  film: Film;
};

export const FilmItem = ({ film }: FilmItemProps) => {
  const dispatch = useAppDispatch();
  const activeFilmTitle = useSelector(selectActiveFilmTitle);

  const { title, episodeId, releaseDate, characters } = film;

  const setActiveFilm = () =>
    dispatch(setActiveFilmAction({ title, characters }));

  return (
    <li
      data-testid={`film-item-${title}`}
      className={`film-item film-item${
        title === activeFilmTitle ? "--active" : ""
      }`}
    >
      <div className="film-item__content">
        <div>
          <h5 className="film-item__title">{title}</h5>
          <span className="film-item__release-date">{releaseDate}</span>
        </div>
        <span className="film-item__episode-id" aria-label="episode id">
          Ep.{episodeId}
        </span>
      </div>
      <div className="film-item__action-wrapper">
        <span onClick={setActiveFilm} className="film-item__show-people">
          Show people
        </span>
      </div>
    </li>
  );
};
