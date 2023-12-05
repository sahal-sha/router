import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact'; 
import Login from './Login';
import Notfound from './notfound';
import { Route, Routes,Link } from 'react-router-dom';


const Main = () => {
  return (
    <div>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            
        </ul>
       <Routes>
<Route path="/" element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
<Route path='/login' element={<Login />} />
<Route path='/services' element={<Services />} />
<Route path='/*' element={<Notfound />} />


        
       </Routes>
    </div>
  );
};

export default Main;