import { skills } from "../../util/skills";
import styles from "./styles.module.scss";

export default function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <span className={styles.title}>Skills</span>
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
