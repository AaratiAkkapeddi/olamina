import React, {useEffect, useContext} from 'react'
import {GlobalState} from '../App'
import ReactMarkdown from 'react-markdown';

/*** COMPONENTS ***/
import Footer from '../Components/Footer'
import BackButton from '../Components/BackButton'
import Header from '../Components/Header'


function Research() {
  const {state} = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="research">
      <Header />
      <BackButton />
      <div>
        <h4>Research</h4>
        {/* <ReactMarkdown source={state.research.copy} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Research
