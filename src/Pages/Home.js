import React, {useEffect, useContext} from 'react'
import {GlobalState} from '../App'
import ReactMarkdown from 'react-markdown';

/* COMPONENTS */
import Footer from '../Components/Footer'

function Home() {

  const {state} = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="home">
      <Footer />
      <h1>Test</h1>
      <div>
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
      </div>
    </div>
  )
}

export default Home
