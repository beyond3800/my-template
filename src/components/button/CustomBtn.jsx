import React from 'react'

const CustomBtn = ({title, style, handleClick, type, children, id }) => {
  return (
    <button className={`${style} p-1 rounded-lg shadow-sm shadow-[#999] cursor-pointer`} onClick={handleClick} type={type} id={id}>{ children }</button>
  )
}

export default CustomBtn