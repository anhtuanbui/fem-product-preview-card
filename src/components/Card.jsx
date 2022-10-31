import React, { Component } from 'react';
import perfumeDesktop from '../images/image-product-desktop.jpg';
import perfumeMobile from '../images/image-product-mobile.jpg';
import addToCart from '../images/icon-cart.svg';
import './Card.scss';

export class Card extends Component {

  render() {
    return (
      <div className='card'>
        <div className="card__image">
          <picture>
            <source media="(min-width:375px)" srcSet={perfumeDesktop}/>
            <img src={perfumeMobile} alt="Gabrielle Essence Eau De Parfum" />
          </picture>

          {/* <img src={window.innerWidth > 375 ? perfumeDesktop : perfumeMobile} alt="perfume" /> */}
        </div>
        <div className="card__content">
          <p className="card__content--type">PERFUME</p>
          <h1 className="card__content--title">Gabrielle Essence Eau De Parfum</h1>
          <p className='card__content--info'>A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.</p>
          <div className="card__content--price">
            <p className='card__content--price-main'>$149.99</p>
            <p className='card__content--price-old'>$169.99</p>
          </div>
          <button>
            <img src={addToCart} alt="add to cart" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Card;
