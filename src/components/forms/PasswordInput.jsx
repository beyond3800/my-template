import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'

const PasswordInput = ({ title, style, handleChange, type, name, id, value }) => {
    const passwordRef = useRef(null);
    const showRef = useRef(null);
    const hideRef = useRef(null);

    const handlePassword = (e) => {
       
        if (e.currentTarget.id === 'hide') {
            passwordRef.current.type = 'text'
            hideRef.current.classList.add('hidden')
            showRef.current.classList.remove('hidden')
        }
        if (e.currentTarget.id === 'show') {
            passwordRef.current.type = 'password'
            hideRef.current.classList.remove('hidden')
            showRef.current.classList.add('hidden')
        }
    }
    return (
      <div className={`rounded-sm py-1 ${style}`}>
        <input
            type={type}
            name={name}
            id={id}
            className={` outline-none w-11/12 bg-transparent pl-3`}
            placeholder={title}
            onChange={handleChange}
            ref={passwordRef}
            />
            {value && <span>
                <span className='' onClick={(e) => handlePassword(e)} id='hide' ref={hideRef}><FontAwesomeIcon icon={faEyeSlash} /></span>
                <span className='hidden' id='show' onClick={(e) => handlePassword(e)} ref={showRef}><FontAwesomeIcon icon={faEye} /></span>
            </span>}
      </div>
  )
}

export default PasswordInput