import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/atoms/Header";
import Home from "./components/atoms/Home/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            index
            element={<h1 style={{ color: "white" }}>{<Home />}</h1>}
          ></Route>
          <Route
            path="movie/:id"
            element={<h1 style={{ color: "white" }}>Movie detail page</h1>}
          ></Route>
          <Route
            path="movies/:type"
            element={<h1 style={{ color: "white" }}>Movie List page</h1>}
          ></Route>
          <Route
            path="/*"
            element={<h1 style={{ color: "white" }}>Error Page</h1>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
