import React from 'react'

const Wrap = ({children}) => {
  return (
    < div className={`flex flex-wrap gap-3`} >
        {children}
    </div >
        
  )
}
export default Wrap