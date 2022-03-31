import styles from "./styles.module.scss";
import { projects } from "../../util/projects";
import Tag from "../Tag";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.title}>
        <span>Projects</span>
      </div>
      <div className={styles.projectsBox}>
        {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <img src={project.image} alt={project.name} />
            <span className={styles.name}>{project.name}</span>
            <span>{project.area}</span>
            <div className={styles.buttons}>
              <a href={project.repo} target="_blank">
                Repo
              </a>
              <a href={project.demo} target="_blank">
                Demo
              </a>
            </div>
            {/* <div className={styles.tags}>
              <span>Tags:</span>
              <span className={styles.tagsNames}>
                {project.tags.map((tag) => (
                  <Tag text={tag} />
                ))}
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
