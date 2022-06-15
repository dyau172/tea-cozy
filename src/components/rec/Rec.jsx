import React from './rec.scss'
import card1 from '../../images/img-berryblitz.jpeg'
import card2 from '../../images/img-spiced-rum.jpeg'
import card3 from '../../images/img-donut.jpeg'
import card4 from '../../images/img-myrtle-ave.jpeg'
import card5 from '../../images/img-bedford-bizarre.jpeg'

export default function Rec() {
  return (
    <div className="rec">
      <div className="tea-header">
        <h2>Tea of the Month</h2>
        <br/>
        <h4>What's steeping at the The Tea Cozy</h4>
      </div>
      <div className="card">
        <div className="card1">
          <img src={card1} alt="" />
          <h4>Fall berry Blitz Tea</h4>
        </div>

        <div className="card2">
          <img src={card2} alt="" />
          <h4>Spiced Rum Tea</h4>
        </div>

        <div className="card3">
          <img src={card3} alt="" />
          <h4>Seasonal Donuts</h4>
        </div>

        <div className="card4">
          <img src={card4} alt="" />
          <h4>Myrtle Ave Tea</h4>
        </div>

        <div className="card5">
          <img src={card5} alt="" />
          <h4>Bedford Bizarre Tea</h4>
        </div>

      </div>
    </div>
  )
}
