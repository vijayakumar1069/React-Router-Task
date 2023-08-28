import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import All from "./components/All";
import Fullstackdevelopment from "./components/Fullstackdevelopment";
import Cybersecurity from "./components/Cybersecurity";
import Datasceience from "./components/Datasceience";
import Carrier from "./components/Carrier";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route
            path="/fullstackdevelopment"
            element={<Fullstackdevelopment />}
          ></Route>
          <Route path="/datascience" element={<Datasceience />}></Route>
          <Route path="/cybersecurity" element={<Cybersecurity />}></Route>

          <Route path="/carrier" element={<Carrier />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
