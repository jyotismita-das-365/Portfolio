import { NavLink } from 'react-router-dom';
import './Nav.css'
import { useTheme } from "../../../context/ThemeContext"
import { ToggleLeft, ToggleRight } from 'lucide-react';
const Nav = () => {

  const { theme, toggleTheme } = useTheme();

  const activeItem = ({isActive}) => {
    return isActive ? "nav-link active-link" : "nav-link"
  }
  
  return (
      <nav className={
        theme === "dark" ? "navbar dark-navbar dark-nav-link" : "navbar light-navbar"
      }>
        <NavLink to="/" className={activeItem}>Home</NavLink>
        <NavLink to="/about" className={activeItem}>About</NavLink>
        <NavLink to="/projects" className={activeItem}>Projects</NavLink>
        <NavLink to="/contact" className={activeItem}>Contact</NavLink>
        <NavLink to="/certificate" className={activeItem}>Certificates</NavLink>

        <button onClick = {toggleTheme} className='theme-btn'>{theme === "light" ? <ToggleLeft  className='theme-btn'/> : <ToggleRight className='theme-btn'/>}</button>
      </nav>
  );
};

export default Nav;