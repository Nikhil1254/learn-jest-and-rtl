import { act, renderHook } from "@testing-library/react";
import useCounter from "../hooks/use-counter/useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    let { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });

  test("should accept and render same initial count", () => {
    let { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });

    expect(result.current.count).toBe(10);
  });

  test("Increment working fine", () => {
    let { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 9,
      },
    });

    // state update code should be inside act
    act(() => {
      result.current.increment();
    });

    // assertion should be done after act
    expect(result.current.count).toBe(10);
  });

  test("Decrement working fine.", () => {
    let { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 11,
      },
    });

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(10);
  });
});
