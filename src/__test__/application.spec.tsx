import { render, screen } from "@testing-library/react";
import { Application } from "../components/application/Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElem = screen.getByText("All fields are mandatory.");
    expect(paragraphElem).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with laptop");
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElem = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElem).toBeInTheDocument();

    const nameElem2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElem2).toBeInTheDocument();

    const nameElem3 = screen.getByPlaceholderText("fullName");
    expect(nameElem3).toBeInTheDocument();

    const nameElem4 = screen.getByDisplayValue("Nikhil");
    expect(nameElem4).toBeInTheDocument();

    const bioElem = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElem).toBeInTheDocument();

    const jobLocationElem = screen.getByRole("combobox");
    expect(jobLocationElem).toBeInTheDocument();

    const jobLocationElem2 = screen.getByLabelText("Name", {
      selector: "select",
    });
    expect(jobLocationElem2).toBeInTheDocument();

    const termsElem = screen.getByRole("checkbox");
    expect(termsElem).toBeInTheDocument();

    const termsElem2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElem2).toBeInTheDocument();

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
  });
});
