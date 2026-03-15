import { useState } from "react";
import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SkillBar from "./components/SkillBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from './components/Loader';


const App = () => {
   const [loading, setLoading] = useState(true);
  return (
    <>
     {loading ? (
        <Loader setLoading={setLoading} />
         
      ):(
        <div>
      <ThreeBackground />
      <Navbar />
      <Home />
      <About />
      <SkillBar />
      <Projects />
      <Contact />
      <Footer />
      </div>
      )}
    </>
     
    
    
  )
}

export default App

