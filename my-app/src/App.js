// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform';
import About from './Components/About.js';
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <Navbar title = "My" />
    <div className="con my-5">
      <Routes>
        <Route path="/" element={<Textform title = "Enter the text" />} />
        <Route path="/about" element={<About />} />         
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
