import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.scss";

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}
