import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./Dashboard";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
