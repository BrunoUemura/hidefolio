import styles from "./styles.module.scss";
import { projects } from "../../util/projects";
import Project from "../Project";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projectsBox}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
