import './App.css';
import { Outlet } from 'react-router-dom'; 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Job from "./components/pages/Job";
import Home from './components/pages/Home';
import marvel from './img/marvel.png';
import texto from './img/texto.svg';
import teia from './img/teia.svg';
import aranha from './img/aranha.svg';
import homemaranha from './img/homem-aranha.svg';
import homemaranha2 from './img/homemaranha2.png';
import Footer from './components/pages/Footer';
import Navbar from './components/pages/Navbar.js';

function App() {
  return (
    <>
    <Navbar />
    <main className='meio'>
      <div className='meio-logo'>
        <img className='meio-logo-imagem' src={texto} />
        <button className='meio-logo-botao'>Watch Now</button>
      </div>
      <div className='homemaranha2'><img className='homemaranha-imagem2' src={homemaranha2} /></div>
    </main>
    <div className='homemaranha'><img className='homemaranha-imagem' src={homemaranha} /></div>
    {/* <div className='homemaranha-teia'><img src={teia} /></div> */} 
    <div className='linha'></div>
    {/* <footer className='footer'> 
      <p>Developed by Murillo Gonçalves</p>
      <img className='footer-imagem' src={aranha} />
    </footer> */}
    </>
  );
}

export default App;
