import './App.css'
import AboutMe from './Component/AboutMe'
import Contact from './Component/Contact.JSX'
import FeaturedProjects from './Component/FeaturedProjects'
import HeroSecation from './Component/HeroSecation'
import Navbar from './Component/Navbar'
import Skills from './Component/Skills'
import WorkExperience from './Component/WorkExperience'
import AnimatedSection from './Component/AnimatedSection'

function App() {

  return (
    <>
     <Navbar />

     <AnimatedSection>
       <HeroSecation/>
     </AnimatedSection>

     <AnimatedSection>
       <AboutMe />
     </AnimatedSection>

     <AnimatedSection>
       <Skills/>
     </AnimatedSection>

     <AnimatedSection>
       <FeaturedProjects />
     </AnimatedSection>

     <AnimatedSection>
       <WorkExperience/>
     </AnimatedSection>

     <AnimatedSection>
       <Contact />
     </AnimatedSection>

    </>
  )
}

export default App