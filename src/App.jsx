import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"
import Project from "./components/Project"
import { Skills } from "./components/Skills"
import Testimonials from "./components/Testimonials"
import Write from "./components/Write"
import { Button } from "./components/ui/button"
import { useState, useEffect } from "react"


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {/* <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Project />
      <Testimonials />
      <Contact />
      <Footer /> */}

      {
        loading ? (<Preloader />) :
          (<div className='App' >
            <div >
              <Navbar />
              <Hero />
              <Skills />
              <About />
              <Experience />
              <Project />
              <Testimonials />
              <Contact />
              <Footer />
            </div>


          </div>)
      }

    </>
  )
}

export default App
