import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { BallTriangle } from "react-loader-spinner";

function App() {
  AOS.init();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-slate-900">
      {loading ? (
        <div className="h-screen bg-slate-900  flex justify-center items-center ">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
