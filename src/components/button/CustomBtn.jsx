import React from 'react'

const CustomBtn = ({title, style, handleClick, type}) => {
  return (
      <button className={`${style} p-1 rounded-lg shadow-sm shadow-[#999]`} onClick={handleClick} type={type}>{ title }</button>
  )
}

export default CustomBtn