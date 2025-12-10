import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Events from './components/Events';
import Community from './components/Community';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Events />
      <Community />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
