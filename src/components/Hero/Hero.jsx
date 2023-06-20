import React from 'react'
import './hero.css'
import hero from '../../../public/hero-image.png'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero__wrapper">

      <div className="white__gradient"/>

      <div className="paddings inner__width hero__container flex__center">
        
        <div className="hero__left flex__col-start">
          <div className="hero__title">
            <div className="orange__circle"/>
            <h1>
              Discover <br /> 
              Most Suiteble <br /> 
              Property
            </h1>
          </div>
          <div className="hero__descriptions flex__col-start">
            <span className='secondary__text'>Find a variety of properties that suit you very easilty</span>
            <span className='secondary__text'>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search__bar flex__center">
            <HiLocationMarker color='var(--blue)' size={25}/>
            <input className='search__bar-input' type="text" />
            <button className='button'>Search</button>
          </div>

          <div className="flex__center stats">

            <div className="stat flex__col-center">
              <span className='stat__title'>
                <CountUp start={8800} end={9000} duration={4}/>
                <span className='stat__plus'>+</span>
              </span>
              <span className='secondary__text'>Premium Product</span>
            </div>

            <div className="stat flex__col-center">
              <span className='stat__title'>
                <CountUp start={1950} end={2000} duration={4}/>
                <span className='stat__plus'>+</span>
              </span>
              <span className='secondary__text'>Happy Customers</span>
            </div>

            <div className="stat flex__col-center">
              <span className='stat__title'>
                <CountUp end={28} duration={4}/>
                <span className='stat__plus'>+</span>
              </span>
              <span className='secondary__text'>Award Winnings</span>
            </div>

          </div>

        </div>

        <div className="flex__center hero__right">
          <div className="image__container">
            <img src={hero} alt="hero" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero