import React, { useState } from 'react'
import { UseThemeContext } from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// const Dropdown = ({ header, children, style }) => {
//   const { contentRef, mode, setLocation } = UseThemeContext()
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(prev=>!prev)
//   }
//   const handleChildClick = (e) => {
//     console.log()
//     toggleDropdown()
//     setLocation()
//   }
//   return (
//     <div className={`dropdown relative ${style}`}>
//       <div className="dropdown-header flex items-center w-full link" onClick={toggleDropdown}>
//           {header}
//       </div>
//       {isOpen && (
//         <div
//           className={`dropdown-content bold absolute ${mode == 'light' ? 'bg-white' : 'bg-slate-700' } shadow-sm shadow-[#999] rounded-md mt-1 px-4 top-8 w-full ${style}`}>
//               {React.Children.map(children, (child) => {
//                   return React.cloneElement(child, {
//                       onClick: () => handleChildClick(child.props.children), // Pass the onClick handler
//                   });
//               })}
//           </div>
//       )}
//     </div>
//   )
// }
// export const DropdownHeader = ({ }) => {
//   <div className="dropdown-header flex items-center w-full link" onClick={toggleDropdown}>
//     {header}
//   </div>
// }

// export default Dropdown

const Dropdown = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(prev => !prev)
      console.log(1233)
    }
    
    return (
        <div className='relative ml-2'>
          {React.Children.map(children, (child) => {
            // Check if the child is a valid React element (not a plain DOM element)
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                isOpen: isOpen,
                handleClick: handleClick,
              });
            }
            return child; // Return the child as-is if it's not a valid React element
          })}
        </div>
    )
}

export const DropdownBody = ({ children, handleClick, isOpen }) => {
    return (
      isOpen &&
      <>
        <div className="p-2 absolute mt-2 shadow-sm shadow-[#999] bg-white rounded-sm z-50 transition-all text-xs capitalize" onMouseLeave={()=>handleClick()}>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        onClick: () => handleClick(), // Pass the onClick handler
                        className:'px-10 hover:shadow-sm shadow-[#999] mb-2 cursor-pointer rounded-sm'
                    });
                })
            }
        </div> 
      </>
    )
}
export const DropdownItem = ({ children }) => {
  return (
    <div className=''>{ children}</div>
  )
}
export default Dropdown