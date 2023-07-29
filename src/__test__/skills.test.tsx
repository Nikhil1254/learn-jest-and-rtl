import {  render, screen } from "@testing-library/react";
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

  test("renders login button if user is not loggedIn", () => {
    render(<Skills skills={skills} />);

    const buttonElem = screen.getByRole("button", {
      name: "Login",
    });
    expect(buttonElem).toBeInTheDocument();
  });

  test("Start learning is not rendered if user not loggedIn", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button renders eventually", async () => {
    let view = render(<Skills skills={skills} />);

    // screen.debug();

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      },
    );

    // logRoles(view.container);
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
