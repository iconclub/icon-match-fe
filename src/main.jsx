// libs
import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "~/App";
// others
import { UserProvider } from "./context/userContext";
import "./styles/normalize.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);
