import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import CreateTask from "./CreateTask";
import TaskItem from "./TaskItem";
import Filter from "../../ui/Filter";
import { isWithinLast } from "../../utility/helpers";
import styles from "./TaskList.module.css";

function TaskList() {
  const [showForm, setShowForm] = useState(false);
  const [searchParams] = useSearchParams();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const tasks = useSelector((state) => state.task.task);

  const filterValue = searchParams.get("last") || "all";

  let filteredTasks = tasks;

  if (filterValue === "2") {
    filteredTasks = tasks.filter((task) => isWithinLast(task.dateTime, 2));
  } else if (filterValue === "5") {
    filteredTasks = tasks.filter((task) => isWithinLast(task.dateTime, 5));
  } else if (filterValue === "1") {
    filteredTasks = tasks.filter((task) => isWithinLast(task.dateTime, 7));
  } else {
    filteredTasks = tasks;
  }

  if (!isAuthenticated)
    return <div className={styles.noAuth}>Please login first to start!</div>;

  if (tasks.length === 0)
    return (
      <div className={styles.noTask}>
        <span>Start by creating a new task</span>
        <CreateTask />
      </div>
    );

  return (
    <>
      <div className={styles.taskNav}>
        <h2>
          Add task
          <span role="button" onClick={() => setShowForm((show) => !show)}>
            &#43;
          </span>
        </h2>

        <Filter />
      </div>

      {showForm && <CreateTask onShowForm={setShowForm} />}

      <section className={styles.taskSection}>
        {filteredTasks.length === 0 ? (
          <p className={styles.noMatch}>No tasks match your filter</p>
        ) : (
          <ul>
            {filteredTasks.map((task) => (
              <TaskItem task={task} key={task.id} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default TaskList;
