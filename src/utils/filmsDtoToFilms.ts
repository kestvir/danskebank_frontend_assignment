import { Film, FilmDto } from "@/types";

export const filmsDtoToFilms = (filmsDto: Array<FilmDto>): Array<Film> => {
  const films: Array<Film> = filmsDto.map((filmDto) => {
    const { title, characters, release_date, episode_id } = filmDto;

    return {
      title,
      characters,
      episodeId: episode_id,
      releaseDate: release_date,
    };
  });

  return films;
};
