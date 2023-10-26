import React from 'react'
import Promotionimage from '../Assets/Promotionimage.jpg'

const Promotion = () => {
  return (
    // Estructura HTML del componente
    <div>
      <div class="container-promotion">
        <div class="left-side-promotion">
            <img src={Promotionimage} alt="" />
        </div>
        <div class="right-side-promotion">
            <div class="content-promotion">
                <h2>¡Promoción Especial!</h2>
                <p>Disfruta de un 15% de descuento en tu próximo helado.</p>
                <p>Oferta válida hasta el 30 de noviembre de 2023.</p>
                <button className='btn-promotion'>Pedir Ahora</button>
            </div>
        </div>
    </div>
    </div>
  )
}

// Exporta el componente "Promotion" como el valor por defecto de este módulo
export default Promotion