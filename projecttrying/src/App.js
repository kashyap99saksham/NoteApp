import React from "react";
import {} from 'react-router-dom'
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Notes from './components/Notes'
import CreateNotes from './components/CreateNotes'
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      <Routes>
           <Route path="/" element={< Home/>} />
           <Route path="/notes" element={< Notes/>} />
           <Route path="/createnotes" element={< CreateNotes />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
