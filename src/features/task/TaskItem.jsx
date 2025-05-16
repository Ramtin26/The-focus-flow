import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";

import { formatDate } from "../../utility/helpers";
import Button from "../../ui/Button";
import styles from "./TaskItem.module.css";

function TaskItem({ task }) {
  const { id: taskId, title, dateTime, completed, description } = task;
  const dispatch = useDispatch();

  function handleComplete(e) {
    if (e.target.checked) dispatch(completeTask(taskId));
  }

  function handleDelete(taskId) {
    if (confirm("Do you really want to delete this task?"))
      dispatch(deleteTask(taskId));
  }

  return (
    <li className={styles.itemList}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.dates}>
        <span>
          {formatDate(dateTime)} at {dateTime.slice(-5)}
        </span>
      </div>

      <div className={styles.status}>
        <label
          htmlFor="completed"
          className={completed ? styles.completedLabel : ""}
        >
          Completed
        </label>
        <input
          id="completed"
          type="checkbox"
          checked={completed}
          onChange={handleComplete}
          disabled={completed}
        />
      </div>

      <div className={styles.buttons}>
        {!completed && (
          <Button to={`/tasks/edit/${taskId}`} type="small">
            edit
          </Button>
        )}
        <Button type="small" onClick={() => handleDelete(taskId)}>
          delete
        </Button>
      </div>
    </li>
  );
}

export default TaskItem;
