import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'


function Copyright() {
  const location = useLocation();

  return (
    
    <footer className={`copyright ${location.pathname === "/" ? 'home' : ''}`}>
      <div className="copyright-container">
        <p className="body-2">Olamina Faction Copyright 2021</p>
      </div>
    </footer>
  )
}

export default Copyright
