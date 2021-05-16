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
import { ReactComponent as blob1 } from '../../assets/img/home_bg_0.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

   }
/* <ReactMarkdown  source={"hi"}/>*/
   render() {
    const {homepage, about, projects} = this.props
    let researches = [];
    if(homepage[0] && homepage[0].fields.Featured){
      researches = projects.map((x)=>{
      console.log(x)
      let contains = false;
      for (var i = homepage[0].fields.Featured.length - 1; i >= 0; i--) {
       if(x.id == homepage[0].fields.Featured[i]){
         contains = true;
       } 
      }
      if(contains){
        return(
        
        <div className="card">
          <h1>Test</h1>
            <ReactMarkdown source={x.Title}/>
            <img src={x.fields.Thumbnail[0].url}/>
            <ReactMarkdown source={x.fields.ShortDescription}/>
        </div>
        )
      }
    })
    }
    

    return (

     <div className="App-header Homepage">
     <Nav></Nav>
        {homepage[0] &&
          <>
           
           <div className="HomeIntro">
           <h1 className="HomeTitle">Olamina Faction_</h1>
           <svg viewBox="50 100 75 75" xmlns="http://www.w3.org/2000/svg">
            <path fill="#A3AF80" d="M37.5,-57.4C50.1,-57.7,62.7,-50.6,61.9,-39.8C61.1,-29,46.8,-14.5,40.1,-3.9C33.4,6.7,34.2,13.5,34.9,24.1C35.6,34.6,36.1,49.1,30.3,54.1C24.4,59.2,12.2,54.9,-0.3,55.4C-12.9,56,-25.8,61.5,-39.9,61.2C-54,60.9,-69.4,54.9,-70.2,43.8C-71,32.6,-57.3,16.3,-55.7,1C-54,-14.4,-64.4,-28.8,-60.3,-34.4C-56.3,-39.9,-37.8,-36.7,-25.4,-36.4C-12.9,-36.2,-6.4,-38.9,3,-44.1C12.5,-49.3,24.9,-57,37.5,-57.4Z" transform="translate(100 100)" />
          </svg>
           </div>
          
            

           <div><ReactMarkdown source={homepage[0].fields.Statement}/></div>
           <div><ReactMarkdown source={homepage[0].fields.Contact}/></div>
          </>
        }
        {researches}
      </div>
      



    );
  }
}

export default Home