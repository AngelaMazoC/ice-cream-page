import React from 'react'
import Aboutimage from '../Assets/Aboutimage.jpg'

const About = () => {
  return (
    <div>
      <div class="container-about">
        <h1 class="container-title-about">Helados Tradicionales & Deliciosos Desde 1997</h1>
        <div class="bottom-content-about">
          <div class="left-content-about">
            <h2>Sobre Nosotros</h2>
            <p>Somos una heladería artesanal dedicada a la creación de helados de alta calidad con ingredientes frescos y naturales. Desde 1997, nos esforzamos por brindar a nuestros clientes una experiencia única en cada deliciosa cucharada.</p>
            <button class="btn-about">saber más</button>
          </div>
          <div class="center-content-about">
            <img src={Aboutimage} alt="" />
          </div>
          <div class="right-content-about">
            <h2>Nuestros productos</h2>
            <p>Ofrecemos una amplia variedad de sabores de helado, desde los clásicos como vainilla y chocolate hasta sabores únicos y exóticos. Todos nuestros helados se elaboran a mano con ingredientes de la más alta calidad.</p>
            <button class="btn-about">saber más</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About