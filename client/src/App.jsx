import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
