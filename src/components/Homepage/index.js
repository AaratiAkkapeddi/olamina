import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import {Header, Releases, Footer, About} from '../';

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
        {homepage[0] &&
          <>
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