import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Router.jsx";
import { RouterProvider } from "react-router";
import BookProvider from "./context/BookContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
    <ToastContainer />
  </StrictMode>,
);
