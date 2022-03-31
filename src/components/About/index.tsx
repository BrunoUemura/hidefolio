import styles from "./styles.module.scss";
import aboutImage from "../../assets/images/about-image.png";
import { externalLinks } from "../../util/externalLinks";

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.title}>
        <h1>About me</h1>
      </div>
      <div className={styles.details}>
        <div className={styles.image}>
          <img src={aboutImage} alt="About Image" />
        </div>
        <div className={styles.information}>
          <span className={styles.location}>Campinas - SP, Brazil</span>
          <span className={styles.aboutMeDetails}>
            <p>
              Software Engineer with experience in Backend development and
              Systems automation. Worked in large scale projects always trying
              to deliver the best solution to the customer.
            </p>
            <p>
              Experience with: JavaScript, TypeScript, Node.js, React, SQL,
              NoSQL, Docker, Kubernetes, Microservices, DevOps, AWS, Serverless.
            </p>
            <p>
              Overseas living experience: Born and raised in Japan, living until
              the age of 13. Attended Japanese school and always had contact
              with the language and local culture.
            </p>
          </span>
          <div className={styles.buttons}>
            {externalLinks.map((link) => (
              <a href={link.href} target="_blank">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
