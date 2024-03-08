import { NavBar } from "./components/NavBar"
import { Routes, Route } from 'react-router-dom';
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
            <Routes>
                <Route path='/' />
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}