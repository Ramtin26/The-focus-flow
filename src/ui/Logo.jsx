import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="./FocusFlow_logo2.png"
        alt="main_logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
