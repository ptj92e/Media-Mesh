import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Profile from "./pages/profile";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
