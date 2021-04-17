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

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

   }
/* <ReactMarkdown  source={"hi"}/>*/
   render() {

    return (

     <div className="navigation">
        <div className="navLeft">

        </div>
        <button className="button button--dirty">Home</button>
        <button className="button">️️About</button>
        <button className="button">Research</button>
      </div>

    
      



    );
  }
}

export default Nav