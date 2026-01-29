import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Arena from "./components/Arena";
import CustomCursor from "./components/CustomCursor";
import NoiseOverlay from "./components/NoiseOverlay";

function App() {
  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Arena />
      <Footer />
    </>
  );
}

export default App;
