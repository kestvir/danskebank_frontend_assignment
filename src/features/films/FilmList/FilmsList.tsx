import { Spinner } from "../../../components";

import { FilmItem } from "./FilmItem";
import { useGetFilmsQuery } from "../filmsApi";

export const FilmsList = () => {
  const { data: films, isLoading, isError, error } = useGetFilmsQuery();

  if (isLoading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  if (isError) {
    console.error(error);

    return (
      <div role="alert" className="text-center">
        Something went wrong.
      </div>
    );
  }

  return (
    <div className="films-list-container">
      <ul aria-labelledby="star-wars-films-heading" className="films-list">
        {films?.map((film) => (
          <FilmItem key={film.title} film={film} />
        ))}
      </ul>
    </div>
  );
};
