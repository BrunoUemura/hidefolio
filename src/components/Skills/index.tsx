import { skills } from "../../util/skills";
import styles from "./styles.module.scss";

export default function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.title}>
        <h1>Skills</h1>
      </div>
      <div className={styles.skillsBox}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skill}>
            <img src={`${skill.imageUrl}`} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
