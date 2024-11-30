import React from 'react'

const Card = ({children,header}) => {
  return (
    <div className="flex justify-center">
      <div className=' h-auto shadow-lg shadow-[#888] w-[400px] px-10 py-5'>
        <div className=" text-center text-lg mb-7 font-bold font-sans opacity-85 letter-spacing">{ header }</div>
        <div className="">{children}</div>
      </div>
    </div>
  )
}

export default Card