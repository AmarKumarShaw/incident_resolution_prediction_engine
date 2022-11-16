import React from 'react'
import Coreflex_logo from '../Asserts/Coreflex.png'
import Leonardo_logo from '../Asserts/Leonardo_logo.png'

function Header() {
  return (
    <div className='d-flex justify-content-between mx-5 pt-4 '>
      <img src={Leonardo_logo} className="logo_img " alt="..." />
      <img src={Coreflex_logo} className="logo_img mt-1" alt="..." />
    </div>
  )
}

export default Header