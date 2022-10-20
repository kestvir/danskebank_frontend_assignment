import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Film } from "../../../../types";
import { renderWithProviders } from "../../../../utils";

import { FilmItem } from "../FilmItem";

const filmData = {
  title: "A New Hope",
  episodeId: 4,
  releaseDate: "1977-05-25",
  characters: ["https://swapi.dev/api/people/1/"],
};

describe("<FilmItem", () => {
  it("renders component", () => {
    const film: Film = filmData;

    renderWithProviders(<FilmItem film={film} />);

    expect(screen.getByText("A New Hope")).toBeInTheDocument();
    expect(screen.getByText("1977-05-25")).toBeInTheDocument();
    expect(screen.getByText("Ep.4")).toBeInTheDocument();
    expect(screen.getByText("Show people")).toBeInTheDocument();
  });
  it("set active class when ", async () => {
    const user = userEvent.setup();

    const film: Film = filmData;

    renderWithProviders(<FilmItem film={film} />);

    await user.click(screen.getByText("Show people"));

    expect(screen.getByTestId("film-item-A New Hope")).toHaveClass(
      "film-item--active"
    );
  });
});
