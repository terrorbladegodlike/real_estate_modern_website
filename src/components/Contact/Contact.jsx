import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenterText} from 'react-icons/hi2'


const Contact = () => {
   return (
      <section className="contact__wrapper">
         <div className="paddings inner__width flex__center contact__container">

            <div className="contact__left flex__col-start">
               <span className='orange__text'>Our Contact</span>
               <span className='primary__text'>Easy to Contact Us</span>
               <span className='secondary__text'>We always ready to help by providijing the best service believe a good blace to live can make you life better</span>

               <div className="contact__modes flex__col-start">

                  <div className="row flex__start">

                     <div className="mode flex__col-center">

                        <div className="flex__start">
                           <div className="flex__center icon">
                              <MdCall size={25}/>
                           </div>
                           <div className="detail flex__col-start">
                              <span className='primary__text'>Call</span>
                              <span className='secondary__text'>079962199</span>
                           </div>
                        </div>

                        <div className="flex__center button">Call Now</div>

                     </div>

                     <div className="mode flex__col-center">

                        <div className="flex__start">
                           <div className="flex__center icon">
                              <BsFillChatDotsFill size={25}/>
                           </div>
                           <div className="detail flex__col-start">
                              <span className='primary__text'>Chat</span>
                              <span className='secondary__text'>079962199</span>
                           </div>
                        </div>

                        <div className="flex__center button">Chat Now</div>

                     </div>

                  </div>

                  <div className="row flex__start">

                     <div className="mode flex__col-center">

                        <div className="flex__start">
                           <div className="flex__center icon">
                              <BsFillChatDotsFill size={25}/>
                           </div>
                           <div className="detail flex__col-start">
                              <span className='primary__text'>Video Call</span>
                              <span className='secondary__text'>079962199</span>
                           </div>
                        </div>

                        <div className="flex__center button">Video Call Now</div>

                     </div>

                     <div className="mode flex__col-center">

                        <div className="flex__start">
                           <div className="flex__center icon">
                              <HiChatBubbleBottomCenterText size={25}/>
                           </div>
                           <div className="detail flex__col-start">
                              <span className='primary__text'>Message</span>
                              <span className='secondary__text'>079962199</span>
                           </div>
                        </div>

                        <div className="flex__center button">Message Now</div>

                     </div>

                  </div>

               </div>

            </div>

            <div className="contact__right">
               <div className="image__container">
                  <img src="./contact.jpg" alt="" />
               </div>
            </div>

         </div>
      </section>
   )
}

export default Contact