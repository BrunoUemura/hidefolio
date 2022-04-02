import { navItems } from "../../util/navItems";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>HideFolio</span>
      <div className={styles.navItems}>
        <GiHamburgerMenu className={styles.hamburger} />

        {navItems.map((item) => (
          <a href={`#${item.id}`}>{item.text}</a>
        ))}
      </div>
    </nav>
  );
}
