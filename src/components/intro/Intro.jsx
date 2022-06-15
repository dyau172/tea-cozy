import React from './intro.scss'
import backgroundfd from '../../images/mission.jpeg'

export default function Intro() {
  return (
    <div className="intro">
      <div className = "img-mission" style={{ 
        backgroundImage: `url(${backgroundfd})`,
        height: '700px',
        width: '1200px'
         }}></div>


      <div className="mission-statement">
        <h2>Our Mission</h2>
        <br/>
        <h4>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
      </div>
    </div>
  )
}
