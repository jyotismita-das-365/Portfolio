import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useTheme } from "../../../context/ThemeContext";
import { ToggleLeft, ToggleRight, Menu, X } from "lucide-react";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const activeItem = ({ isActive }) => {
    return isActive ? "nav-link active-link" : "nav-link";
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav
        className={
          theme === "dark"
            ? "navbar dark-navbar dark-nav-link"
            : "navbar light-navbar"
        }
      >
        <NavLink to="/" className={activeItem}>
          Home
        </NavLink>
        <NavLink to="/about" className={activeItem}>
          About
        </NavLink>
        <NavLink to="/projects" className={activeItem}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={activeItem}>
          Contact
        </NavLink>
        <NavLink to="/certificate" className={activeItem}>
          Certificates
        </NavLink>

        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? (
            <ToggleLeft className="theme-btn" />
          ) : (
            <ToggleRight className="theme-btn" />
          )}
        </button>

        {/* Mobile menu button */}
        <div>
          <button className="menu-btn" onClick={toggleMenu}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className={
            theme === "dark"
              ? "navbar dark-navbar dark-nav-link"
              : "navbar light-navbar"
          }
        >
          <NavLink to="/" className={activeItem} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeItem} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" className={activeItem} onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={activeItem} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/certificate" className={activeItem} onClick={() => setIsOpen(false)}>
            Certificates
          </NavLink>

          <button onClick={toggleTheme(), () => setIsOpen(false)} className="theme-btn">
            {theme === "light" ? (
              <ToggleLeft className="theme-btn" />
            ) : (
              <ToggleRight className="theme-btn" />
            )}
          </button>
        </nav>
      )}
    </>
  );
};

export default Nav;
