import { render, screen } from "@testing-library/react";
import Skills from "../components/skills/Skills";

describe("Skills Component", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list-items correctly", () => {
    render(<Skills skills={skills} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });
});
