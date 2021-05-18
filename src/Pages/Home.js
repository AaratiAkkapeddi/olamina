import React, {useEffect, useContext} from 'react';
import {GlobalState} from '../App';
import ReactMarkdown from 'react-markdown';

/* COMPONENTS */
import Header from '../Components/Header';
import Landing from '../Components/Landing';
import LandingDescription from '../Components/LandingDescription';
import LandingResearch from '../Components/LandingResearch';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {

  const {state} = useContext(GlobalState);



  return (
    <div id="home">
      
      <Header />
      <Landing />
      <LandingDescription />
      <LandingResearch />
      {/* <div>
        {
          state.categories.length > 0 && state.categories.map((block) => {
            return (
              <div key={block.id} className="role-block">
                <h4>{block.fields.Article}</h4>
                <ReactMarkdown source={block.fields.Author} linkTarget={"_blank"} />
              </div>
            )
          })
        }
      </div> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
