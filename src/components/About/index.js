import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Nav} from '../';
// import {Header, Releases, Footer, About} from '../';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

   }
/* <ReactMarkdown  source={"hi"}/>*/
   render() {
    const {homepage, about, projects} = this.props
    console.log(about[0])
    return (

     <div className="App-header Homepage">
     <Nav></Nav>
        {about[0] &&
          <>
           <div><ReactMarkdown source={about[0].fields.Mission}/></div>
           {
            about[0].fields.ThemeImages && about[0].fields.ThemeImages[0] &&
              <div><img src={about[0].fields.ThemeImages[0].url}/></div>
           }
           
           <div><ReactMarkdown source={about[0].fields.AfroNowism}/></div>
           {
            about[0].fields.ThemeImages && about[0].fields.ThemeImages[1] &&
              <div><img src={about[0].fields.ThemeImages[1].url}/></div>
           }
            <div><ReactMarkdown source={about[0].fields.PrototypeZero}/></div>
           {
            about[0].fields.ThemeImages && about[0].fields.ThemeImages[2] &&
              <div><img src={about[0].fields.ThemeImages[2].url}/></div>
           }
             <div><ReactMarkdown source={about[0].fields.RadicalSpaces}/></div>
            {
            about[0].fields.ThemeImages && about[0].fields.ThemeImages[3] &&
              <div><img src={about[0].fields.ThemeImages[3].url}/></div>
           }
              <div><ReactMarkdown source={about[0].fields.DT}/></div>
          </>
        }
      </div>
      



    );
  }
}

export default About