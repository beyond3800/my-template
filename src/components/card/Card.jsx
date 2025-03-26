import React from 'react'

const Card = ({ children, header, style }) => {
  return (
    <div className="">
      <div className={`h-auto shadow-lg shadow-[#888] px-10 py-5 ${style}`}>
        {/* <div className=" ">{ header }</div> */}
        <div className="">{children}</div>
      </div>
    </div>
  )
}

export const CardBody = ({ children}) => {
  return (
    <div className="">{ children }</div>
  )
}

export const CardHeader = ({ children, style}) => {
  return (
    <div className={`text-center text-lg mb-7 font-bold font-sans opacity-85 letter-spacing ${style}`}>{ children }</div>
  )
}

export default Card