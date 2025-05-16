import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { updateTask } from "./taskSlice";
import Button from "../../ui/Button";
import styles from "./UpdateTask.module.css";

function UpdateTask() {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const { taskId } = useParams();

  const task = useSelector((state) =>
    state.task.task.find((t) => String(t.id) === taskId)
  );
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!task) return <div className={styles.noTask}>Task not found.</div>;

  const { title, dateTime, description } = task || {};

  useEffect(
    function () {
      if (dateTime) {
        const timePart = dateTime.slice(-5);
        const [h, m] = timePart.split(":");
        setHour(h);
        setMinute(m);
      }
    },
    [dateTime]
  );

  function handleUpdate(e) {
    e.preventDefault();

    const date = e.target.date.value;

    const update = {
      id: task.id,
      title: e.target.title.value,
      description: e.target.description.value,
      dateTime: `${date}T${hour}:${minute}`,
    };

    dispatch(updateTask(update));
    navigate("/tasks");
  }

  return (
    <>
      <h2>Update your task</h2>

      <div className={styles.formContainer}>
        <form onSubmit={handleUpdate} className={styles.editForm}>
          <div className={styles.title}>
            <label htmlFor="title">Title: </label>
            <input id="title" defaultValue={title} />
          </div>

          <div className={styles.desc}>
            <label htmlFor="description">Description: </label>
            <textarea id="description" defaultValue={description} />
          </div>

          <div className={styles.date}>
            <label htmlFor="date">Date: </label>
            {/* <input type="datetime-local" id="date" defaultValue={dateTime} /> */}
            {/* <input type="time" /> */}
            <input type="date" id="date" defaultValue={dateTime.slice(0, 10)} />
          </div>

          <div className={styles.time}>
            <label>Time: </label>
            <select value={hour} onChange={(e) => setHour(e.target.value)}>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>

            <span>:</span>

            <select value={minute} onChange={(e) => setMinute(e.target.value)}>
              {["00", "15", "30", "45"].map((min) => (
                <option key={min} value={min}>
                  {min}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <Button htmlType="submit" type="primary">
              Update
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateTask;
