import React, {useEffect, useContext} from 'react'
import {GlobalState} from '../App'
import ReactMarkdown from 'react-markdown';

/*** COMPONENTS ***/
import Footer from '../Components/Footer'
import BackButton from '../Components/BackButton'


function About() {
  const {state} = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="about">
      <BackButton />
      <div>
        <h4>about black beyond</h4>
        {/* <ReactMarkdown source={state.about.copy} /> */}
        <h4>more info</h4>
        <a className="about-link" href="mailto:enter@blackbeyond.xyz" target="_blank" rel="noopener noreferrer">enter@blackbeyond.xyz</a>
        <a className="about-link" href="https://instagram.com/blackbeyond_/" target="_blank" rel="noopener noreferrer">instagram</a>
        <a className="about-link" href="https://twitter.com/blackbeyond_/" target="_blank" rel="noopener noreferrer">twitter</a>
      </div>
      <Footer />
    </div>
  )
}

export default About
