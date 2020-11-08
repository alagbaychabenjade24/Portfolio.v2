import Homepage from './components/homepage/Homepage';
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projects';
// import Footer from './components/footer/Footer';

import './App.css';

function App() {
    return (
        <div className='app'>
            <Homepage />
            <AboutMe />
            <Projects />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
