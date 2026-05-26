import Nav from "../src/components/Pages/Nav/Nav";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/Pages/Resume/Resume";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Skills from './components/Pages/Skills/Skills';
import Projects from './components/Pages/Projects/Projects';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
}

export default App;
