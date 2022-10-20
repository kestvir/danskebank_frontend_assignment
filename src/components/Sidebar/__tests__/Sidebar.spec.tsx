import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Sidebar } from "../Sidebar";

const links = [
  { to: "about", label: "About" },
  { to: "films", label: "Films" },
];

describe("<Sidebar/>", () => {
  it("renders component", () => {
    render(<Sidebar links={links} />, { wrapper: BrowserRouter });

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Films" })).toBeInTheDocument();
  });
});
