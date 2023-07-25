import React from "react";
import { CounterTwoProps } from "./counterTwo.type";

function CounterTwo(props: CounterTwoProps) {
  return (
    <div>
      <h1>Counter Two</h1>
      <p data-testid="count">{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
}

export default CounterTwo;
