import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './Nav.css'
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Nav = () => {
  const activeItem = ({isActive}) => {
    return isActive ? "nav-link active-link" : "nav-link"
  }
  
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <NavLink to="/" className={activeItem}>Home</NavLink>
        <NavLink to="/about" className={activeItem}>About</NavLink>
        <NavLink to="/projects" className={activeItem}>Projects</NavLink>
        <NavLink to="/skills" className={activeItem}>Skills</NavLink>
        <NavLink to="/contact" className={activeItem}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Nav;