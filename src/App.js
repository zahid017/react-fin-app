import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteComponents from "./routes/RouteComponents";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="content">
          <RouteComponents />
        </div>
      </div>
    </Router>
  );
}

export default App;
