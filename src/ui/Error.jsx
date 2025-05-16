import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import styles from "./Error.module.css";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles.error}>
      <h1>Something went wrong :(</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
