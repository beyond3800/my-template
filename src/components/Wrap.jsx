import React from 'react'

const Wrap = ({children}) => {
  return (
    < div className={`flex flex-wrap gap-3`} >
      {React.Children.map(children, (child) => {
          return React.cloneElement(child)
        })}
    </div >
        
  )
}
export default Wrap