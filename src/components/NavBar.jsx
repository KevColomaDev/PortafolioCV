import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';
import Home from "/src/assets/icons/house-5.svg";
import About from "/src/assets/icons/circle-info.svg";
import Projecs from "/src/assets/icons/suitcase-3.svg"
import Contact from "/src/assets/icons/user-laptop.svg"

export function NavBar() {
        const ScrollToSection = (id) => {
            const element = document.getElementById(id);
            element.scrollIntoView({behavior: 'smooth'});
    }; 
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <NavLink to = 'home' onClick={() => ScrollToSection('home')}>
                        <img src={Home} alt="Home" />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "about" onClick={() => ScrollToSection('about')}>
                        <img src={About} alt="About me" />
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "projects" onClick={() => ScrollToSection('projects')}>
                        <img src={Projecs} alt="Projects" />
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "contact" onClick={() => ScrollToSection('contact')}>
                        <img src={Contact} alt="Contact" />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}