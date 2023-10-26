import React from 'react'
import Bannerhome from '../Assets/Bannerhome.jpg'

// Componente que muestra el banner 
const Home = () => {
  return (
    // Estructura HTML del componente
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

// Exporta el componente "Home" como el valor por defecto de este módulo
export default Home