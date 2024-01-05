import { BrowserRouter } from 'react-router-dom';
import {
    About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works,
} from './components';

function App() {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </BrowserRouter>
    );
}

export default App;
