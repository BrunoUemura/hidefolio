import styles from "./styles.module.scss";
import aboutImage from "../../assets/about-image.png";
import Pdf from "../../assets/documents/CV-PT-Bruno-Uemura.pdf";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.image}>
        <img src={aboutImage} alt="About Image" />
      </div>
      <div className={styles.information}>
        <span className={styles.title}>About me</span>
        <span className={styles.location}>São Paulo, Brazil</span>
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
        <a className={styles.button} href={Pdf} target="_blank">
          View CV
        </a>
      </div>
    </div>
  );
}
