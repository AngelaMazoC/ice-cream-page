import React from 'react'
import Logo from '../Assets/LogoGelashi.png'
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="column">
          <img src={Logo} alt="" />
          <div class="social-icons">
            <a href="#"><i class="">
              <IoLogoTwitter />
            </i></a>
            <a href="#"><i class="">
              <IoLogoFacebook />
            </i></a>
            <a href="#"><i class="">
              <IoLogoInstagram />
            </i></a>
          </div>
        </div>
        <div class="column">
          <h3>Escribenos</h3>
            <p><a href="#">pqr@gelashi.com</a></p>
            <p><a href="#">domicilios@gelashi.com</a></p>
            <p><a href="#">info@gelashi.com</a></p>
            <p><a href="#">+57 (604) 444 44 44</a></p>
        </div>
        <div class="column">
          <h3>Links</h3>
          <p><a href="#">Inicio</a></p>
          <p><a href="#">Sobre Nosotros</a></p>
          <p><a href="#">Productos</a></p>
          <p><a href="#">Contactános</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer