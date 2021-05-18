import React from 'react'
import { Link } from 'react-router-dom'


function Footer({ gradient = false }) {
  return (
    <footer className={gradient ? "gradient" : ""}>
      <nav>
        <Link to="/about">about</Link>
        <Link to="/research">research</Link>
      </nav>
    </footer>
  )
}

export default Footer
