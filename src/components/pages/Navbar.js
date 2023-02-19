import './Navbar.css';
import { Outlet } from 'react-router-dom'; 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Job from "./Job";
import Home from './Home';
import marvel from '../../img/marvel.png'
import App from '../../App';
import { useRef } from 'react';
import { useOutisdeClick } from './useOutsideClick.js';
import React, { useState, useEffect } from 'react';

function Navbar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 680) {
        setDropdownOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <>
    <div className='cabecalho'>
      <img className='cabecalho-imagem' src={marvel} />
      <nav className='navegacao'>
        <a><Link to="/">Home</Link></a>
        <a><Link to="/about">About</Link></a>
        <a><Link to="/job">Job</Link></a>
        <a><Link to="/contact">Contact</Link></a>
      </nav>
              <li className="dropdown">
          <p href="#"  className='botaohamburguer' onClick={toggleDropdown}>&#9776;</p>
          {dropdownOpen && (
            <ul className="dropdown-menu">
                <a><Link to="/">Home</Link></a>
                <a><Link to="/about">About</Link></a>
                <a><Link to="/job">Job</Link></a>
                <a><Link to="/contact">Contact</Link></a>
            </ul>
          )}
        </li>
    </div>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/job" element={<Job />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default Navbar;
