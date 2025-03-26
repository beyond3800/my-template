import React from 'react'
import { useNavigate } from 'react-router-dom'

const DropdownItem = ({ children, onClick, to }) => {
    const navigate = useNavigate(null);
    const handleClick = () => {
      onClick()
      if (to) {
        navigate(to)
      }
    }
  return (
    <div className="dropdown-item sub-link" onClick={handleClick}>
      {children}
    </div>
  )
}

export default DropdownItem