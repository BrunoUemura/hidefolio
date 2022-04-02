import { customStyles } from "../../util/customStyles";
import styles from "./styles.module.scss";

type Props = {
  name: string;
  area: string;
  repo: string;
  demo: string;
  image: string;
  status: string;
  technologies: {
    languages: string[];
    tools: string[];
  };
};

export default function Project(project: Props) {
  return (
    <div className={styles.project}>
      <img src={project.image} alt={project.name} />
      <p className={styles.name}>{project.name}</p>

      <div className={styles.details}>
        <p className={styles.area}>{project.area}</p>
        <p className={styles.status}>{project.status}</p>
      </div>

      <div className={styles.languages}>
        <p>Languages: </p>
        <div>
          {project.technologies.languages.map((language: string) => (
            <span style={customStyles[language]}>{language}</span>
          ))}
        </div>
      </div>

      <div className={styles.tools}>
        <p>Tools: </p>
        <div>
          {project.technologies.tools.map((tool: string) => (
            <span style={customStyles[tool]}>{tool}</span>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <a href={project.repo} target="_blank">
          Repo
        </a>
        <a href={project.demo} target="_blank">
          Demo
        </a>
      </div>
    </div>
  );
}
