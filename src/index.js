import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";

const root = ReactDOM.hydrateRoot(document.getElementById("root"),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );