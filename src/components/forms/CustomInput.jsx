import React from 'react'

const CustomInput = ({title, style, handleChange, type, name, id, value}) => {
  return (
    <div className={`py-1 ${style}`}>
      <input
        type={type}
        name={name}
        id={id}
        className={` outline-none w-full bg-transparent pl-3 focus-none`}
        placeholder={title}
        onChange={handleChange}
        value={value}
      />
    </div>
      
  )
}

export default CustomInput