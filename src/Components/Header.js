import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import {NavLink} from 'react-router-dom'
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
        <NavLink className="button" activeClassName="button--dirty" exact to="/">home</NavLink>
        <NavLink className="button" activeClassName="button--dirty" to="/about">about</NavLink>
        <NavLink className="button" activeClassName="button--dirty" to="/research">research</NavLink>
      </div>

    
      



    );
  }
}

export default Header