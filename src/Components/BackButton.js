import React from 'react'
import { Link } from 'react-router-dom'

/*** ASSETS ***/
import Arrow from '../assets/img/back-arrow.svg'

function BackButton() {
  return (
    <Link to="/" className="back-button">
      <img src={Arrow} alt="back to home" />
      <h3>back</h3>
    </Link>
  )
}

export default BackButton
