import React, {useEffect, useContext} from 'react'
import {GlobalState} from '../App'
import ReactMarkdown from 'react-markdown';

/*** COMPONENTS ***/
import Copyright from '../Components/Copyright'
import BackButton from '../Components/BackButton'
import Header from '../Components/Header'


function Research() {
  const {state} = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <div id="research">
        <Header />
        <BackButton />
        <div>
          <div className="research-content">
            <h2>Research</h2>
            <p className="body-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec urna id purus facilisis imperdiet. Suspendisse sit amet molestie felis. Fusce sed urna neque. Pellentesque ultrices ante non ante eleifend hendrerit. Nulla facilisi. Aenean ex augue, aliquam a mattis mollis, dictum aliquet eros. Cras ultrices sodales elit vulputate venenatis. Mauris consequat sed nisi sed ultrices. Mauris et egestas eros. Donec convallis lectus tincidunt, venenatis lacus vitae, bibendum nunc. Vivamus dapibus urna non nibh eleifend eleifend. Phasellus volutpat erat eget tortor ultrices commodo. Aliquam nec mauris at metus posuere malesuada ut condimentum neque. Morbi ac lorem interdum eros luctus laoreet. </p>
            <h3>Ongoing Projects</h3>
            </div>
          {/* <ReactMarkdown source={state.research.copy} /> */}
        </div>
        
      </div>
    <Copyright />
    </div>
    
  )
}

export default Research
