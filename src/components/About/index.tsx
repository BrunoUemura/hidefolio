import styles from "./styles.module.scss";
import aboutImage from "../../assets/images/about-image.png";
import CVPdf from "../../assets/documents/CV-PT-Bruno-Uemura.pdf";

const LINKEDIN_URL = "https://www.linkedin.com/in/bruno-uemura/";
const GITHUB_URL = "https://github.com/BrunoUemura";

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.image}>
        <img src={aboutImage} alt="About Image" />
      </div>
      <div className={styles.information}>
        <span className={styles.title}>About me</span>
        <span className={styles.location}>Campinas - SP, Brazil</span>
        <span className={styles.details}>
          <p>
            Software Engineer with experience in Backend development and Systems
            automation. Worked in large scale projects always trying to deliver
            the best solution to the customer.
          </p>
          <p>
            Experience with: JavaScript, TypeScript, Node.js, React, SQL, NoSQL,
            Docker, Kubernetes, Microservices, DevOps, AWS, Serverless.
          </p>
          <p>
            Overseas living experience: Born and raised in Japan, living until
            the age of 13. Attended Japanese school and always had contact with
            the language and local culture.
          </p>
        </span>

        <div className={styles.buttons}>
          <a className={styles.buttonOne} href={LINKEDIN_URL} target="_blank">
            LinkedIn
          </a>
          <a className={styles.buttonTwo} href={CVPdf} target="_blank">
            View CV
          </a>
          <a className={styles.buttonThree} href={GITHUB_URL} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
