import { useSelector } from "react-redux";

import {
  selectActiveFilmPeopleUrls,
  selectActiveFilmTitle,
} from "../activeFilmSlice";
import { PersonRow } from "./PersonRow";

export const PeopleTable = () => {
  const activeFilmTitle = useSelector(selectActiveFilmTitle);
  const activeFilmPeopleUrls = useSelector(selectActiveFilmPeopleUrls);

  if (!activeFilmTitle) return null;

  return (
    <div className="people-table__wrapper">
      <table className="people-table">
        <thead className="people-table__header">
          <tr className="people-table__row">
            <th className="people-table__header-title" colSpan={4}>
              People in {activeFilmTitle}
            </th>
          </tr>
        </thead>
        <tbody className="people-table__body">
          {activeFilmPeopleUrls.map((url) => (
            <PersonRow key={url} url={url} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
