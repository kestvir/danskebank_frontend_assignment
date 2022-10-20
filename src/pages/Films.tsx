import { useSetDocumentTitle } from "@/hooks";
import { FilmsList } from "@/features/films/FilmList/FilmsList";
import { PeopleTable } from "@/features/films/PeopleTable/PeopleTable";

export const Films = () => {
  useSetDocumentTitle("Films");

  return (
    <section>
      <h1 id="star-wars-films-heading" className="films-heading text-center">
        Star Wars Films
      </h1>
      <FilmsList />
      <PeopleTable />
    </section>
  );
};
