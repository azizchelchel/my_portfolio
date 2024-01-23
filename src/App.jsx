import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div className="bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
