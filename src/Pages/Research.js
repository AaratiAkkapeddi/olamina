import React, {useEffect, useContext} from 'react'
import {GlobalState} from '../App'
import ReactMarkdown from 'react-markdown';

/*** COMPONENTS ***/
import Footer from '../Components/Footer'
import BackButton from '../Components/BackButton'


function Research() {
  const {state} = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="research">
      <BackButton />
      <div>
        <h4>Research</h4>
        {/* <ReactMarkdown source={state.research.copy} /> */}
        <h4>more info</h4>
        <a className="research-link" href="mailto:enter@blackbeyond.xyz" target="_blank" rel="noopener noreferrer">enter@blackbeyond.xyz</a>
        <a className="research-link" href="https://instagram.com/blackbeyond_/" target="_blank" rel="noopener noreferrer">instagram</a>
        <a className="research-link" href="https://twitter.com/blackbeyond_/" target="_blank" rel="noopener noreferrer">twitter</a>
      </div>
      <Footer />
    </div>
  )
}

export default Research
