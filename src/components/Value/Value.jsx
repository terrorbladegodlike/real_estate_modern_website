import React, { useState } from 'react'
import './value.css'
import {
   Accordion,
   AccordionItem,
   AccordionItemHeading,
   AccordionItemButton,
   AccordionItemPanel,
   AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'

const Value = () => {
   return (
      <section className="value__wrapper">
         <div className="paddings inner__width flex__center value__container">
            
            <div className="value__left">
               <div className="image__container">
                  <img src="./value.png" alt="" />
               </div>
            </div>

            <div className="value__right flex__col-start">
               <span className='orange__text'>Our Value</span>
               <span className='primary__text'>Value We Give to You</span>
               <span className='secondary__text'>
                  We always ready to help by providijng the best services for 
                  <br />
                  We believe a good blace to live can make your life better
               </span>

               <Accordion
                  className='accordion'
                  allowMultipleExpanded={false}
                  preExpanded={[0]}
               >
                  {
                     data.map((item, i) => {

                        const [className, setClassName] = useState(null)

                        return (
                           <AccordionItem
                              className={`accordion__item ${className}`}
                              key={i}
                              uuid={i}
                           >
                              <AccordionItemHeading>
                                 <AccordionItemButton className='flex__center accordion__button'>

                                    <AccordionItemState>
                                       {({expanded}) => expanded
                                       ? setClassName("expanded")
                                       : setClassName("collapsed")
                                    } 
                                    </AccordionItemState>

                                    <div className="flex__center icon">
                                       {item.icon}
                                    </div>
                                    <span className='primary__text'>
                                       {item.heading}
                                    </span>
                                    <div className="flex__center icon">
                                       <MdOutlineArrowDropDown size={20}/>
                                    </div>
                                 </AccordionItemButton>
                              </AccordionItemHeading>

                              <AccordionItemPanel className='accordion__panel'>
                                 <p className="accordion__panel-text">
                                    {item.detail}
                                 </p>
                              </AccordionItemPanel>

                           </AccordionItem>
                        )
                     })
                  }
               </Accordion>
            </div>

         </div>
      </section>
   )
}

export default Value