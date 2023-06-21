import React from 'react'
import './getstarted.css'

const GetStarted = () => {
   return (
      <section className="get__wrapper">
         <div className="paddings inner__width get__container">
            <div className='inner__container flex__col-center'>
               <span className='primary__text'>Get Started with Homyz</span>
               <span className='secondary__text'>
                  Subcribe and find super attractive price quotes from us.
                  <br />
                  Find your residence soon
               </span>
               <button className='button'>
                  <a href="mailto:ternovetchii.2002@mail.ru">Get Started</a>
               </button>
            </div>
         </div>
      </section>
   )
}

export default GetStarted