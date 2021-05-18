import React from 'react'
import downArrow from '../assets/down-arrow.svg';

function DownButton() {

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div id="down-button" onClick={handleScrollDown}>
      <img src={downArrow} alt="click this arrow to scroll down to the next section" />
    </div>
  )
}

export default DownButton
