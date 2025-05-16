import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

import Button from "../../ui/Button";
import styles from "./CreateTask.module.css";

function CreateTask({ onShowForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      completed: false,
      title,
      dateTime: `${date}T${hour}:${minute}`,
      description,
    };

    dispatch(addTask(newTask));

    setTitle("");
    setDescription("");
    setDate("");
    setHour("12");
    setMinute("");
    onShowForm?.(false);
  }

  return (
    <div className={styles.taskForm}>
      <form onSubmit={handleSubmit} className={styles.addForm}>
        <div className={styles.title}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.description}>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            value={description.slice(0, 1000)}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={styles.date}>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
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

        <div className={styles.button}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
