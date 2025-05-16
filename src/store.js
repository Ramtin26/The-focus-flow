import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import taskReducer from "./features/task/taskSlice";

function loadUser() {
  try {
    const serialized = localStorage.getItem("user");
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch {
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
  preloadedState: {
    user: loadUser() || {
      isAuthenticated: false,
      userName: "",
      email: "",
    },
  },
});

export default store;
