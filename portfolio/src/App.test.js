import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders Navbar", () => {
    render(<App />);
    const navbarElement = screen.getByTestId("navbar"); // Use appropriate data-testid
    expect(navbarElement).toBeInTheDocument();
  });
});
