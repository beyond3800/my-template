import React from 'react'
import { UseThemeContext } from '../contexts/ThemeContext'

const Container = ({ children,handleClick }) => {
  const { mode,containerRef } = UseThemeContext();
  return (
    <div
      className={`${mode == 'light' ? 'bg-[#ffffff] text-[#999]' : ' bg-slate-950 text-[#f0f0f0]'} overflow-hidden main pb-10`}
      ref={containerRef}
    >
          {children}
    </div>
  )
}

export default Container