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
    const {homepage, about, projects} = this.props
    console.log(about[0])
    return (

     <div className="navigation">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/Research">Research</a>
      </div>
      



    );
  }
}

export default Nav