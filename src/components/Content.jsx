import React from 'react'
import { UseThemeContext } from '../contexts/ThemeContext'

const Content = ({ children }) => {
  const { closeNav, contentRef} = UseThemeContext()
  const handleClick = () => {
    closeNav()
  }
  return (
    <div className='content scroll px-10 pt-3 pb-10 h-screen' onClick={() => handleClick()} ref={contentRef}>
      {children}
    </div>
  )
}

export default Content