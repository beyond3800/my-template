import React from 'react'
import { forwardRef } from 'react'

const Scroll = forwardRef(({children, scrollX, scrollY, style},ref) => {
    return (
        <div className={`overflow-hidden pt-3 ${style}`} >
            <div
                ref={ ref }
                className={` gap-2 overflow-x-auto h-full flex py-6 pr-6 strollbar` }>
                
                {
                    React.Children.map(children, (child) => {
                        const className = child.props.className ? child.props.className : ''
                        return React.cloneElement( <div className="" data-id={child.key?child.key:''}>{child}</div>,{'className':`${className}`})
                    })  
                    
                }
            </div>
        </div>
    )
})

export default Scroll