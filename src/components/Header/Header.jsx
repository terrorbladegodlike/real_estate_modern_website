import React from 'react'
import './header.css'
import logo from '../../../public/logo.png'

const Header = () => {
  return (
    <section className="hero__wrapper">
      <div className="flex__center paddings inner__width hero__container">
        
        <img src={logo} alt="" width={100} />

        <div className="flex__center hero__menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'>
            <a href="">Contact</a>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Header