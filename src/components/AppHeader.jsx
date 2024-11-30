import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoon,
    faSearch,
    faSun
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { UseThemeContext } from '../contexts/ThemeContext';
import CustomInput from './forms/CustomInput';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const AppHeader = () => {
  const { setMode, mode, openNav, barRef, url, closeNav} = UseThemeContext();
  const [show, _setShow] = useState(false);
  const handleMode = (mode) => {
    setMode(mode)
    _setShow(prev=>!prev)
  }
  return (
    <div className="flex justify-between nav px-4 pt-3 pb-2 shadow-sm ">
        <div className="font-serif font-bold capitalize"> { url } </div>
        <div className=" flex">
            <div className="mr-3 hidden md:flex rounded-lg text-sm border-0 shadow-sm shadow-[#888] justify-center items-center">
                <label className='ml-4' htmlFor='search'> <FontAwesomeIcon icon={faSearch} color='#999' size='xs'/></label>
                <CustomInput type='text' style='p-1 border-0 bg-transparent' title={`Search`} id={`search`} />
            </div>
            <div className="mr-3 hidden md:block">
                <CustomInput type='date' style='rounded-lg text-sm bg-transparent border-0 shadow-sm shadow-[#888] p-1' />
            </div>
            <div className=" shadow-sm shadow-current px-2 rounded p-1">
                {mode=='light'?<FontAwesomeIcon icon={faMoon} onClick={() => handleMode('dark') } size='lg' />
                :<FontAwesomeIcon icon={faSun} onClick={() => handleMode('light')} size='lg'/>}
            </div>
            <div className="mx-3 shadow-sm shadow-current py-1 px-2 rounded md:hidden block rotate-90" onClick={ ()=> openNav()} ref={barRef}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
              
        </div>
    </div>
  )
}

export default AppHeader