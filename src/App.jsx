// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Carrer from "./components/Carrer";
import About from "./components/About";
import Detail from "./components/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/carrer/:detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
