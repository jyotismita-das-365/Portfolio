import { NavLink } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
  const activeItem = ({isActive}) => {
    return isActive ? "nav-link active-link" : "nav-link"
  }
  
  return (
      <nav className='navbar'>
        <NavLink to="/" className={activeItem}>Home</NavLink>
        <NavLink to="/about" className={activeItem}>About</NavLink>
        <NavLink to="/projects" className={activeItem}>Projects</NavLink>
        <NavLink to="/skills" className={activeItem}>Skills</NavLink>
        <NavLink to="/contact" className={activeItem}>Contact</NavLink>
      </nav>
  )
}

export default Nav;