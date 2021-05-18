import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import '../assets/styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends Component {
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
        <Link className="button button--dirty" to="/">home</Link>
        <Link className="button" to="/about">about</Link>
        <Link className="button" to="/research">research</Link>
      </div>

    
      



    );
  }
}

export default Header