import styles from "./styles.module.scss";
import bannerImage from "../../assets/banner-image3.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.information}>
        <span>Hi there 🖐️, I am</span>
        <span className={styles.name}>Bruno Hideki Uemura</span>
        <span>a Software Engineer</span>
        <a href="#about" className={styles.button}>
          See more
        </a>
      </div>
      <div className={styles.image}>
        <img src={bannerImage} alt="Banner Image" />
      </div>
    </div>
  );
}
