import { useSelector } from "react-redux";
import Button from "./Button";
import styles from "./Home.module.css";

function Home() {
  const userName = useSelector((state) => state.user.userName);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <div className={styles.home}>
      {/* <img src="./bg2.webp" alt="background" /> */}
      <h1>a place for managing your daily tasks📑</h1>

      {!isAuthenticated ? (
        <Button to="/login" type="primary">
          Login first to enjoy your daily chores
        </Button>
      ) : (
        <Button to="/tasks" type="primary">
          Resume managing, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
