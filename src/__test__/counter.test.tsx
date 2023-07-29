import { screen, render } from "@testing-library/react";
import Counter from "../components/counter/Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders with initial count as 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders count as 1 after single click on increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const countElement = screen.getByRole("heading");

    await user.pointer({
      target: incrementButton,
      keys: "[MouseLeft]",
    });
    expect(countElement).toHaveTextContent("1");
  });

  test("renders count as 2 after clicking on button 2 times", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const countElement = screen.getByRole("heading");

    await user.dblClick(incrementButton);
    expect(countElement).toHaveTextContent("2");
  });

  test("Renders a count of 10 after clicking on set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");

    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const countElement = screen.getByRole("heading");

    await user.click(setButton);
    expect(countElement).toHaveTextContent("10");
  });

  test("Elements are focused in right order", async () => {
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
