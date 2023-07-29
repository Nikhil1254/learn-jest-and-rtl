import { useState } from "react";

type UseCounterProps = {
  initialCount?: number;
};

const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount ? initialCount : 0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

export default useCounter;
