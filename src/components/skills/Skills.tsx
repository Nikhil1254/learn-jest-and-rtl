import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.type";

const Skills = ({ skills }: SkillsProps) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 1001);
  });

  return (
    <>
      <ul>
        {skills.map((skill, idx) => {
          return <li key={idx}>{skill}</li>;
        })}
      </ul>
      {!isLogin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogin}>Start learning</button>
      )}
    </>
  );
};

export default Skills;
