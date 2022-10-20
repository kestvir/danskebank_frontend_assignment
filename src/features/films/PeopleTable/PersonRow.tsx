import { Spinner } from "../../../components";

import { useGetPersonQuery } from "../filmsApi";

export type PersonRowProps = {
  url: string;
};

export const PersonRow = ({ url }: PersonRowProps) => {
  const {
    data: person,
    isLoading,
    isError,
    error,
  } = useGetPersonQuery({ url });
  const { name, birthYear, gender, mass } = person || {};

  if (isError) {
    console.error(error);

    return null;
  }

  if (isLoading)
    return (
      <tr className="people-table__row text-center">
        <Spinner>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </tr>
    );

  return (
    <tr className="people-table__row">
      <td className="people-table__data-cell">{name}</td>
      <td className="people-table__data-cell">{birthYear}</td>
      <td className="people-table__data-cell">{gender}</td>
      <td className="people-table__data-cell">
        {mass} {mass !== "unknown" ? "kg" : ""}
      </td>
    </tr>
  );
};
