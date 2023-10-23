import React from 'react'
import Productone from '../Assets/product-1.jpg'
import Producttwo from '../Assets/product-2.jpg'
import Productthree from '../Assets/product-3.jpg'
import Productfour from '../Assets/product-4.jpg'

const Products = () => {
  return (
    <div class="container-products">
      <div class="content-container-products">
        <h5 class="section-title-products">Nuestros Productos</h5>
        <h1 class="main-title-products">Delicias Geladas: Sabores Orgánicos, Calidad Artesanal y Precios Irresistibles</h1>
        <div class="products-row">
          <div class="products-item">
            <div class="products-box">
              <div class="image-products">
                <img src={Productone} alt="" />
              </div>
              <h4 class="products-title">Conos</h4>
              <button className='btn-products '>Pedir Ahora</button>
            </div>
          </div>
          <div class="products-item">
            <div class="products-box">
              <div class="image-products">
                <img src={Producttwo} alt="" />
              </div>
              <h4 class="products-title">Copas</h4>
              <button className='btn-products '>Pedir Ahora</button>
            </div>
          </div>
          <div class="products-item">
            <div class="products-box">
              <div class="image-products">
                <img src={Productthree} alt="" />
              </div>
              <h4 class="products-title">Postres</h4>
              <button className='btn-products '>Pedir Ahora</button>
            </div>
          </div>
          <div class="products-item">
            <div class="products-box">
              <div class="image-products">
                <img src={Productfour} alt="" />
              </div>
              <h4 class="products-title">Malteadas</h4>
              <button className='btn-products '>Pedir Ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products