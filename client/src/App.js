import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Navbar} />
      </div>
    </Router>
  );
}

export default App;
