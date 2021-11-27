import "./App.css";
import Navbar from "./components/navbar/navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./redux/actions/dataAction";

import Homepage from "./pages/Homepage";
import Introduction from "./pages/Introduction";
import Education from "./pages/Education";
import Works from "./pages/Works";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <Router className="App">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/education" element={<Education />} />
          <Route path="/works" element={<Works />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
