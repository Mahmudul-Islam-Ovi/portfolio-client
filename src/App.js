import './App.css';
import NavBar from './Component/Nab/Nav';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routers from './Component/Router/Router';
import Project from './Component/Project/Project';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Bottom from './Component/Bottom/Bottom';



function App() {
  return (
    <div  className="App">
      <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Routers />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/project" element={<Project />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Bottom></Bottom>
      </Router>
      
    </div >
  );
}

export default App;
