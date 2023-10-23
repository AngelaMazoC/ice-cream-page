import React from 'react'
import Bannerhome from '../Assets/Bannerhome.jpg'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-banner-container">
        <img src={Bannerhome} alt="" />
        <div className="overlay-content">
          <h4 className='subheading-heading-home'>TRADICIONAL & DELICIOSO</h4>
          <h1 className='primary-heading-home'>Elaborado Con Productos Organicos</h1>
          <button className="boton">Saber Más</button>
        </div>
      </div>
    </div>
  )
}

export default Home