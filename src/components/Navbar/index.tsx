import { navItems } from "../../util/nav-items";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>HideFolio</h1>
      <div className={styles.navItems}>
        <GiHamburgerMenu className={styles.hamburger} />

        {navItems.map((item) => (
          <a href={`#${item.id}`}>{item.text}</a>
        ))}
      </div>
    </nav>
  );
}
