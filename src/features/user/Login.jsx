import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "./userSlice";
import Button from "../../ui/Button";
import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [authChecked, setAuthChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks", { replace: true });
    } else {
      setAuthChecked(true);
    }
  }, [isAuthenticated, navigate]);

  if (!authChecked) return null;

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !isValidEmail) return;
    dispatch(updateProfile({ userName: username, email }));
    navigate("/tasks");
  }

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.loginMessage}>
          ⚡ Welcome! Please begin with telling us your name and email:
        </p>

        <div className={styles.row}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your full name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label>Email address</label>
          <input
            type="text"
            placeholder="Your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {email !== "" && !isValidEmail && (
          <p className={styles.error}>
            ⚠ Please provide a valid email address!
          </p>
        )}

        {username !== "" && email !== "" && (
          <div className={styles.button}>
            <Button htmlType="submit" disabled={!isValidEmail} type="primary">
              Start managing
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
