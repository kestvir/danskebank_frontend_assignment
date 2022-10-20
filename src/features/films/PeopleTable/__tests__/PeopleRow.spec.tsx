import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { rest } from "msw";

import { renderWithProviders } from "../../../../utils";
import { PersonDto } from "../../../../types";
import { server } from "../../../../test/mocks/server";
import { personMocks } from "../../../../test/mocks/personMocks";

import { PersonRow } from "../PersonRow";

describe("<PersonRow/>", () => {
  it("fetches and renders film list", async () => {
    server.use(
      rest.get("https://swapi.dev/api/people/1", (_, res, ctx) =>
        res(ctx.status(200), ctx.json<PersonDto>(personMocks))
      )
    );

    renderWithProviders(<PersonRow url="https://swapi.dev/api/people/1" />);

    expect(screen.getByRole("status")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole("status"));

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("19BBY")).toBeInTheDocument();
    expect(screen.getByText("male")).toBeInTheDocument();
    expect(screen.getByText("77 kg")).toBeInTheDocument();
  });

  it("renders error message if API fails on page load", async () => {
    server.use(
      rest.get("https://swapi.dev/api/people/1", (_req, res, ctx) =>
        res.once(
          ctx.status(500),
          ctx.json({ message: "Something went wrong." })
        )
      )
    );
    renderWithProviders(<PersonRow url="https://swapi.dev/api/people/1" />);

    expect(screen.getByRole("status")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole("status"));

    expect(screen.queryByText("Luke Skywalker")).not.toBeInTheDocument();
  });
});
