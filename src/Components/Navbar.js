import React from 'react'
import Logo from '../Assets/LogoGelashi.png'

const Navbar = () => {
  return (
    <nav>
      <img className='nav-image' src={Logo} alt="" />
        <ul>
            <li class="active"><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contáctenos</a></li>
        </ul>
    </nav>
    
  )
}

export default Navbar