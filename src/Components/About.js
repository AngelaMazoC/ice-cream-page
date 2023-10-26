import React from 'react'
import Aboutimage from '../Assets/Aboutimage.jpg' // Importamos la imagen que se va a mostar en el componente


// Componente que muestra el sobre nosotros
const About = () => {
  return (
    // Estructura del componente 
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
            {/* Llamamos la imagen que importamos anteriormente */}
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

// Exporta el componente "About" como el valor por defecto de este módulo
export default About 