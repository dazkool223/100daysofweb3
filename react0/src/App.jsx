import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
