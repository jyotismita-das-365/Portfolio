import Nav from "../src/components/Pages/Nav/Nav";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Contact from './components/Pages/Contact/Contact';
import Certificate from './components/Pages/Certificate/certificate'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/certificate" element={<Certificate />}></Route>
      </Routes>
    </>
  );
}

export default App;
