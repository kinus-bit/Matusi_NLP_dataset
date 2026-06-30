import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Solution from './components/Solution';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Home />
        <About />
        <Solution />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
