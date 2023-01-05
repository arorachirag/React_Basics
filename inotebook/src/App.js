import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home  from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './Components/Alert';
import Signup from './Components/Signup';
import React,{useState,useEffect} from 'react'

function App() {

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing React course" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}/>

              <Route exact path="/about" element={<About />}/>

              <Route exact path="/signup" element={<Signup />}/>
                
              
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
