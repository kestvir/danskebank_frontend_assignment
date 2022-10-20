import { render, screen } from "@testing-library/react";

import { Spinner } from "../Spinner";

describe("<Spinner/>", () => {
  it("renders component", () => {
    render(<Spinner />);

    expect(getSpinnerEl()).toBeInTheDocument();
  });

  it("renders app centered spinner component if isAppCentered prop is true", () => {
    render(<Spinner isAppCentered />);

    const spinnerEl = getSpinnerEl();

    expect(spinnerEl).toBeInTheDocument();
    expect(spinnerEl).toHaveClass("spinner--position-app-centered");
  });

  it("renders children", () => {
    render(
      <Spinner>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

const getSpinnerEl = () => screen.getByRole("status");
