
import './App.css'
import AboutMe from './Component/AboutMe'
import FeaturedProjects from './Component/FeaturedProjects'
import HeroSecation from './Component/HeroSecation'
import Navbar from './Component/Navbar'
import Skills from './Component/Skills'
function App() {

  return (
    <>
     <Navbar />
     <HeroSecation/>
     <AboutMe />
     <Skills/>
     <FeaturedProjects />
    </>
  )
}

export default App
