import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact';
import './styles/NavBar.css'

export function NavBar(){
    return(
        <Router>
            <header className='header'>
                <div>
                    Kevin <span>Coloma</span>
                </div>
                <nav className='menu'>
                    <ul>
                        <li>
                            <NavLink to = "/home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/projects">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}