import React from 'react'
import './residencies.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from './../../utils/slider.json';

const Residencies = () => {
  return (
    <section className="r__wrapper">
      <div className="paddings inner__width r__container">
         <div className="r__head flex__col-start">
            <span className='orange__text'>Best Choices</span>
            <span className='primary__text'>Popular Residencies</span>
         </div>

         <Swiper
            slidesPerView={4}
            spaceBetween={50}
         >
            <SliderButtons/>
            {
               data.map((card, i) => (
                  <SwiperSlide key={i}>
                        <div className="r__card flex__col-start">
                           <img src={card.image} alt="image" />

                           <span className="secondary__text r__price">
                              <span style={{color: "orange"}}>$</span>
                              <span>{card.price}</span>
                           </span>

                           <span className='primary__text card__name'>{card.name}</span>
                           <span className='secondary__text card__details'>{card.detail}</span>
                        </div>
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </div>
    </section>
  )
}

export default Residencies;

const SliderButtons = () => {

   const swiper = useSwiper();

   return (
      <div className="r__button flex__center">
         <button onClick={() => swiper.slidePrev()}>&lt;</button>
         <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
   )
}