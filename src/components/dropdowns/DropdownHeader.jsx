import React from "react"

const DropdownHeader = ({ children, style, handleClick, isOpen }) => {
  return (
    <div onClick={()=>handleClick()} className={`cursor-pointer px-1 ${style}`}>{ children }</div>
  )
}
export default DropdownHeader

