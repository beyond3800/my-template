import { faChevronDown, faChevronRight, faSignsPost } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const NavDropdown = ({ style, header, children }) => {
  const [show, setShow] = useState(false)
  const openDropdown = () => {
    setShow(prev=>!prev)
  }
  return (
    <div className={` mx-2 ${style}`}>
      <div className="link flex justify-between px-1" onClick={() => openDropdown()}>
        <span>
          <span className='mr-2'><FontAwesomeIcon icon={faSignsPost} size='xs' /></span>
          {header}
        </span>
        <span>{show?<FontAwesomeIcon icon={faChevronDown} size='xs' /> :<FontAwesomeIcon icon={faChevronRight} size='xs' />}</span>
      </div>
      {show&&<div className="w-auto h-auto ml-8 text-xs opacity-80 transition">
        {children}
      </div>}
    </div>
  )
}

export default NavDropdown