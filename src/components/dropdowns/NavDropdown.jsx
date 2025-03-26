import { faChevronDown, faChevronRight, faSignsPost } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const NavDropdown = ({ style, header, children, isOpen, handleClick}) => {
  return (
    <div className={` mx-2 ${style}`}>
      {isOpen&&<div className="w-auto h-auto ml-8 text-xs opacity-80 transition">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            onClick: () => handleClick(), // Pass the onClick handler
          });
      })}
      </div>}
    </div>
  )
}

export default NavDropdown