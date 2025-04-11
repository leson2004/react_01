import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UsersPage from "./pages/users.jsx";
import ProjectPage from "./pages/product.jsx";
import TodoApp from "./components/todo/TodoApp.jsx";
import ErrorPage from "./components/layout/error_page.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";
//import Header from "./components/header/header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },

      {
        path: "/product",
        element: <ProjectPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  //{/* <App /> */}
  // </React.StrictMode>
);
