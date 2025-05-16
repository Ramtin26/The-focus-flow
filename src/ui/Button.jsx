import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({
  disabled = false,
  to,
  type,
  htmlType = "button",
  onClick,
  children,
}) {
  const styleTypes = {
    primary: styles.primary,
    small: styles.small,
    round: styles.round,
    secondary: styles.secondary,
    active: styles.active,
  };

  if (to)
    return (
      <Link to={to} className={styleTypes[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styleTypes[type]}
      >
        {children}
      </button>
    );

  return (
    <button type={htmlType} disabled={disabled} className={styleTypes[type]}>
      {children}
    </button>
  );
}

export default Button;
