import React from "react";
import ReactDOM from "react-dom/client";

import "./normalize.css";
import "./index.css";
import App from "./App";
import MentorProvider from "./contexts/MentorProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MentorProvider>
      <App />
    </MentorProvider>
  </React.StrictMode>
);
