import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Header />

      <div>
        <main className={styles.mainBody}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
