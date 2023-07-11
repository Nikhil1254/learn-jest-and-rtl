import { SkillsProps } from "./skills.type";

const Skills = ({ skills }: SkillsProps) => {
  return (
    <>
      <ul>
        {skills.map((skill, idx) => {
          return <li key={idx}>{skill}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
