import { navItems } from "../../util/NavItems";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Portfolio</h1>
      <div className={styles.navItems}>
        {navItems.map((item) => (
          <a href={`#${item.id}`}>{item.text}</a>
        ))}
      </div>
    </nav>
  );
}
