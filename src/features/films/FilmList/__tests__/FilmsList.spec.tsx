import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { rest } from "msw";

import { renderWithProviders } from "../../../../utils";
import { FilmsResponse } from "../../../../types";
import { server } from "../../../../test/mocks/server";
import { filmMocks } from "../../../../test/mocks/filmMocks";

import { FilmsList } from "../FilmsList";

describe("<FilmsList/>", () => {
  it("fetches and renders film list", async () => {
    server.use(
      rest.get("https://swapi.dev/api/films", (_, res, ctx) =>
        res(ctx.status(200), ctx.json<FilmsResponse>(filmMocks))
      )
    );

    renderWithProviders(<FilmsList />);

    expect(screen.getByRole("status")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole("status"));

    expect(screen.getByText("A New Hope")).toBeInTheDocument();
    expect(screen.getByText("1977-05-25")).toBeInTheDocument();
    expect(screen.getByText("Ep.4")).toBeInTheDocument();
    expect(screen.getByText("Show people")).toBeInTheDocument();
  });
});
