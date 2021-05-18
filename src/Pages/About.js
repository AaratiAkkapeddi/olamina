import React, {useEffect, useContext} from 'react'
import {GlobalState} from '../App'
import ReactMarkdown from 'react-markdown';

/*** COMPONENTS ***/
import Footer from '../Components/Footer'
import BackButton from '../Components/BackButton'
import Header from '../Components/Header'


function About() {
  const {state} = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="about">
      <Header />
      <BackButton />
      <div className="about-content">
       <h1>About</h1>
       <p>Olamina Faction is a research laboratory dedicated to investigating the intersections of design, technology, pedagogy, and anti-racist philosophy, to dismantle structures of oppression that underlie these domains. Our vision for the lab is to create institutional wide impact, beginning with our department, to set precedent for how higher education can pursue conscientious efforts towards equity, diversity, and inclusion while producing critically engaged design practitioners.</p>
       <p>The lab is composed of Parsons Design + Technology students, faculty, alumni, and associated groups. Olamina Faction is developed to address pedagogy, research, and recruitment as they relate to structural and systemic racism. Its mission is driven by research and implementation of anti-racist organization, curriculum, and community within the field of design and creative technology.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About
