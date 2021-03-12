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

class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };

   }
/* <ReactMarkdown  source={"hi"}/>*/
   render() {
    const {homepage, about, projects} = this.props
    const researches = projects.map((x)=>{
      console.log(x)
      return(
        <div className="card">
         <div className="card-header"><h1>{x.fields.Title}</h1>
         <ReactMarkdown source={x.fields.Description}/></div>
         {x.fields.Images &&
          <img src={x.fields.Images[0].url}/>
         }
         <ReactMarkdown source={x.fields.Description}/>
        </div>
        )

    })


    return (

     <div className="App-header Homepage">
     <Nav></Nav>
        {researches}
      </div>
      



    );
  }
}

export default Research