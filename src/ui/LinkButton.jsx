import { Link, useNavigate } from "react-router-dom";
import styles from "./LinkButton.module.css";

function LinkButton({ to, children }) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button className={styles.buttonLink} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={styles.buttonLink}>
      {children}
    </Link>
  );
}

export default LinkButton;
