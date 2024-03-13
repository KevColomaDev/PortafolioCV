import { NavBar } from "./components/NavBar"
import { Home } from './components/pages/Home';
import { Experience } from './components/pages/Experience';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import { BrowserRouter as Router} from 'react-router-dom';
import '/src/App.css'

export function App(){
    return (
        <Router>
            <header>
                <NavBar />
            </header>
            <section id="home">
                <Home />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </Router>
    )
}