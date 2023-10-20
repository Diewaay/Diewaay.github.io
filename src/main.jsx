import React from "react";
import ReactDOM from "react-dom/client";
import NoteApp from "./components/NoteApp.jsx";
import "./style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
