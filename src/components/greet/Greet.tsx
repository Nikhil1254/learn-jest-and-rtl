import { GreetProps } from "./greet.types";

const Greet = ({ name }: GreetProps) => {
  return (
    <>
      <h1>Hello, {name ? `${name}` : "Sir"}</h1>
    </>
  );
};

export default Greet;
