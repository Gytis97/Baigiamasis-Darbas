import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test if Treniruociu planai exists", () => {
  render(<App />);
  const linkElement = screen.getByText("Treniruočių planai");
  expect(linkElement).toBeInTheDocument();
});
