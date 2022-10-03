import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'> Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan. Watch all you want. This riveting crime series won Best Drama at the International Emmy Awards, Premios Fénix and Premios Iris (plus six more Iris wins). </h1>
        </div>
    <div className="fade_bottom"></div>   

    </div>
  )
}

export default Banner