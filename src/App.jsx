import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import TaskList from "./features/task/TaskList";
import UpdateTask from "./features/task/UpdateTask";
import Login from "./features/user/Login";
import About from "./ui/About";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tasks",
        element: <TaskList />,
      },
      {
        path: "/tasks/edit/:taskId",
        element: <UpdateTask />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
