import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';
export function NavBar() {
        const ScrollToSection = (id) => {
            const element = document.getElementById(id);
            element.scrollIntoView({behavior: 'smooth'});
    }; 
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <NavLink to = '/' onClick={() => ScrollToSection('home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 18 18"><title>Home</title><g fill="#64FFDA" className="nc-icon-wrapper"><path d="M5.75,15.75v-4.75c0-.69,.56-1.25,1.25-1.25h0c.69,0,1.25,.56,1.25,1.25v4.75" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5" data-color="color-2"></path><line x1="10.75" y1="9.75" x2="12.25" y2="9.75" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5" data-color="color-2"></line><path d="M2.655,6.45L9,1.75l6.345,4.7c.255,.189,.405,.487,.405,.804v6.496c0,1.105-.895,2-2,2H4.25c-1.105,0-2-.895-2-2V7.254c0-.317,.15-.615,.405-.804Z" fill="none" stroke="#64FFDA" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5"></path><line x1="13.75" y1="2.75" x2="13.75" y2="5.269" fill="none" stroke="#64FFDA" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5"></line></g></svg>
                        Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "experience" onClick={() => ScrollToSection('experience')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 18 18"><title>About me</title><g fill="#64FFDA" className="nc-icon-wrapper"><circle cx="9" cy="9" r="7.25" fill="none" stroke="#64FFDA" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5"></circle><line x1="9" y1="12.819" x2="9" y2="8.25" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5" data-color="color-2"></line><path d="M9,6.75c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="#fff" data-color="color-2" data-stroke="none" stroke="none"></path></g></svg>
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "projects" onClick={() => ScrollToSection('projects')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 18 18"><title>Projects</title><g fill="#64FFDA" className="nc-icon-wrapper"><path d="M1.75,8.75c1.421,.616,3.966,1.503,7.25,1.503s5.829-.887,7.25-1.503" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5" data-color="color-2"></path><line x1="9" y1="9.25" x2="9" y2="11.5" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5" data-color="color-2"></line><path d="M6.25,4.75V2.25c0-.552,.448-1,1-1h3.5c.552,0,1,.448,1,1v2.5" fill="none" stroke="#64FFDA" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5"></path><rect x="1.75" y="4.75" width="14.5" height="10.5" rx="2" ry="2" fill="none" stroke="#64FFDA" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5"></rect></g></svg>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "contact" onClick={() => ScrollToSection('contact')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 18 18"><title>user laptop</title><g fill="#64FFDA" className="nc-icon-wrapper"><circle cx="8" cy="5.5" r="3.75" fill="none" stroke="#64FFDA" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5"></circle><path d="M1.953,15c1.298-1.958,3.522-3.25,6.047-3.25" fill="none" stroke="#64FFDA" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5"></path><path d="M14.925,16.25h-6.175l1.868-4.203c.08-.181,.259-.297,.457-.297h5.406c.362,0,.604,.372,.457,.703l-1.556,3.5c-.08,.181-.259,.297-.457,.297Z" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5" data-color="color-2"></path><line x1="8.75" y1="16.25" x2="5.75" y2="16.25" fill="none" stroke="#fff" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="1.5" data-color="color-2"></line></g></svg>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}