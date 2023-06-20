import React from 'react'
import './companies.css'

const Companies = () => {
  return (
    <section className="companies__wrapper">
      <div className="paddings inner__width flex__center companies__container">
        <img src="./prologis.png" alt="prologis" />
        <img src="./tower.png" alt="tower" />
        <img src="./equinix.png" alt="equinix" />
        <img src="./realty.png" alt="realty" />
      </div>
    </section>
  )
}

export default Companies