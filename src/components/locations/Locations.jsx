import React from './locations.scss'
import locationbg from '../../images/img-locations-background.jpeg'

export default function Locations() {
  return (
    <div className="locations">
      <div className="img-location" style={{
        backgroundImage: `url(${locationbg})`,
        height: '600px',
        width: '1200px'
      }}></div>

      <div className="wrap">
        <div className="heading">
          <h2>Locations</h2>
        </div>

        <div className="blocks">

          <div className="block">
            <h3>Downtown</h3>
            <p>384 West 4th St</p>
            <p>Suite 108</p>
            <p>Portland, Maine</p>
          </div>

          <div className="block">
            <h3>East Bayside</h3>
            <p>3433 Phisherman's Avenue</p>
            <p>(Northwest Corner)</p>
            <p>Portland, Maine</p>
          </div>

          <div className="block">
            <h3>Oakdale</h3>
            <p>515 Crescent Avenue</p>
            <p>Second Floor</p>
            <p>Portland, Maine</p>
          </div>

        </div>

      </div>




    </div>
  )
}

