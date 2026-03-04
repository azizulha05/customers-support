import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layouts from "./Layouts/Layouts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layouts />
    <ToastContainer />
  </StrictMode>,
);
