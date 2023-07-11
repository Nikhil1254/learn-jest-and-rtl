/**
 * Greet should render text Hello nd if name is passed into the component
 * It should render Hello followed by name
 */

import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

describe("Greet", () => {
  test("rendered without name prop", () => {
    render(<Greet />);
    let textElem = screen.getByText("Hello, Sir");
    expect(textElem).toBeInTheDocument();
  });

  test("rendered with name prop", () => {
    render(<Greet name={"Nikhil"} />);
    let textElem = screen.getByText("Hello, Nikhil");
    expect(textElem).toBeInTheDocument();
  });
});
