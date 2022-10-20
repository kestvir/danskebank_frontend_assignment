import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ErrorBoundary } from "../ErrorBoundry";

describe("<ErrorBoundry", () => {
  it("renders error boundry if there is an error", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("recovers from error boundry", async () => {
    const user = userEvent.setup();

    const ThrowError = () => {
      const [count, setCount] = useState(1);

      if (count > 1) {
        throw new Error("Test");
      }

      return (
        <div>
          <p>count: {count}</p>
          <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
      );
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    await user.click(screen.getByRole("button", { name: "increment" }));

    expect(screen.queryByRole("alert")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Try again?" }));

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("renders children and doesn't render an error boundry if there is no error", () => {
    render(
      <ErrorBoundary>
        <h1>Hello, World!</h1>
      </ErrorBoundary>
    );

    expect(screen.queryByTestId("app-error-boundry")).not.toBeInTheDocument();
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
});
