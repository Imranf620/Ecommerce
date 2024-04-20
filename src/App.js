import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
