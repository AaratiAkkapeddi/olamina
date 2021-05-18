import React from 'react'
import { Link } from 'react-router-dom'

/*** ASSETS ***/
import backArrow from '../assets/img/back-arrow.svg'

function BackButton() {
  return (
    <Link to="/" className="back-button">
      <img src={backArrow} alt="click this button to go back to the homepage" />
      <h1>back</h1>
    </Link>
  )
}

export default BackButton
