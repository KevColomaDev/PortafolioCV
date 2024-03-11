import { NavBar } from "./components/NavBar"
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import { BrowserRouter as Router} from 'react-router-dom';

export function App(){
    return (
        <Router>
            <header>
                <NavBar />
            </header>
            <section id="home">
                Contenido de la Sección 1
                <Home />
            </section>
            <section id="about">
                Contenido de la Sección 2
                <About />
            </section>
            <section id="projects">
                Contenido de la Sección 3
                <Projects />
            </section>
            <section id="contact">
                Contenido de la seccion 4 
                <Contact />
            </section>
        </Router>
    )
}