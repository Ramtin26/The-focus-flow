import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      // payload = new item
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      // payload = taskId
      state.task = state.task.filter((item) => action.payload !== item.id);
    },
    updateTask(state, action) {
      // payload = newObj
      const updated = action.payload;
      const index = state.task.findIndex((t) => t.id === updated.id);
      if (index !== -1) {
        state.task[index] = { ...state.task[index], ...updated };
      }
    },
    completeTask(state, action) {
      // payload = bolean
      const task = state.task.find((t) => t.id === action.payload);
      if (task) task.completed = true;
    },
  },
});

export const { addTask, deleteTask, updateTask, completeTask, clearTask } =
  taskSlice.actions;

export default taskSlice.reducer;
