import {
  Navbar,
  Banner,
  About,
  Skills,
  Experiences,
  Projects,
} from "./components";
import styles from "./styles/App.module.scss";

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}
