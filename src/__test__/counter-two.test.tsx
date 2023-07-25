import { render, screen } from "@testing-library/react";
import CounterTwo from "../components/counter-two/CounterTwo";
import userEvent from "@testing-library/user-event";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);

    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();

    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("0");
  });

  test("handlers are called",async ()=>{
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn()

    userEvent.setup();
    render(<CounterTwo count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
    />);

    const incrementButton = screen.getByRole('button',{
        name : 'Increment'
    });
    const decrementButton = screen.getByRole('button',{
        name : 'Decrement'
    });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(incrementHandler).toBeCalledTimes(1);
    expect(decrementHandler).toBeCalledTimes(1);
  })
});
