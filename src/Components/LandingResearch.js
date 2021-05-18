import React from 'react'
import { Link } from 'react-router-dom'


function LandingResearch() {
  return (
    
    <div className="landing-research">
        <h1 className="landing-research-title">Featured Research</h1>
        <div className="landing-research-content">
            <div className="landing-research-item">
                <div className="landing-research-item-img"
                style={{ backgroundImage: `url('https://via.placeholder.com/250/000000/808080?Text=Digital.com')` }}
                ></div>
                <div className="landing-research-item-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id felis porta, lacinia diam id, consectetur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. </div>
            </div>
            <div className="landing-research-item">
                <div className="landing-research-item-img"
                style={{ backgroundImage: `url('https://via.placeholder.com/250/000000/808080?Text=Digital.com')` }}
                ></div>
                <div className="landing-research-item-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id felis porta, lacinia diam id, consectetur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. </div>
            </div>
            <div className="landing-research-item">
                <div className="landing-research-item-img"
                style={{ backgroundImage: `url('https://via.placeholder.com/250/000000/808080?Text=Digital.com')` }}
                ></div>
                <div className="landing-research-item-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id felis porta, lacinia diam id, consectetur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. </div>
            </div>  
        </div>
    </div>
  )
}

export default LandingResearch