import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Arena from "./components/Arena";
import Certificates from "./components/Certificates";
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
      <Certificates />
      <Arena />
      <Footer />
    </>
  );
}

export default App;
