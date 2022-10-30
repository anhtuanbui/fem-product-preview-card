import React, { Component } from 'react';
import perfumeDesktop from '../images/image-product-desktop.jpg';
import perfumeMobile from '../images/image-product-mobile.jpg';
import addToCart from '../images/icon-cart.svg';
import './Card.scss';

export class Card extends Component {

  windowWidth = () => { 
    this.setState({"width": window.innerWidth})
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowWidth)
  }

  render() {
    return (
      <div className='card'>
        <div className="card__image">
          <img src={window.innerWidth > 375 ? perfumeDesktop : perfumeMobile} alt="perfume" />
        </div>
        <div className="card__content">
          <h2 className="card__content--type">PERFUME</h2>
          <h1 className="card__content--title">Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.</p>
          <div className="card__content--price">
            <h3>$149.99</h3>
            <h4>$169.99</h4>
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
