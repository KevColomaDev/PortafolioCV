import { NavBar } from "./components/NavBar"
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
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
            <section id="about">
                <About />
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