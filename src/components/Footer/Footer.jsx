import React from 'react'
import './footer.css'

const Footer = () => {
   return (
      <footer className="footer__wrapper">
         <div className="paddings inner__width flex__center footer__container">

            <div className="footer__left flex__col-start">
               <img src="./logo2.png" alt="logo" width={120} />

               <span className="secondary__text">
                  Our vision is to make all people <br />
                  the best place to live for them
               </span>
            </div>

            <div className="footer__right flex__col-start">
               <span className='primary__text'>Information</span>
               <span className='secondary__text'>145 New York, FL 4571, USA</span>

               <div className="flex__center footer__menu">
                  <span>Property</span>
                  <span>Services</span>
                  <span>Product</span>
                  <span>About Us</span>
               </div>
            </div>

         </div>
      </footer>
   )
}

export default Footer