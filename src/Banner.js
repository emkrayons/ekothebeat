import React from 'react'
import Webbanner from './img/Web Banner.jpg'; 

function Banner() {
  return (
    <div className="w-full mx-auto flex items-center">
        <img src={Webbanner} alt="Logo"  />
       
      </div>
  )
}

export default Banner