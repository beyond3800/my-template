import { faAreaChart, faHome, faPeopleGroup, faQuestionCircle, faSignInAlt, faTasks, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { UseThemeContext } from '../contexts/ThemeContext'
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools'
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion'
import CustomInput from './forms/CustomInput'
import NavDropdown from './dropdowns/NavDropdown';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

const SideNav = () => {
    const { mode, navRef, setLocation, closeNav} = UseThemeContext();
    const handleLink = () => {
        setLocation()
        closeNav()
    }
    return (
        <div className={` h-screen ${mode == 'light' ? 'bg-light text-[#1e1e1e]' : 'bg-gray-800 text-gray-100'} hidden text-opacity-95 md:block opacity-90 sidebar md:visible shadow-md shadow-[#999]`} ref={navRef}>
            <div className=" flex">
                <div className={`w-[250px] h-screen font-bold font-serif relative `}>
                    <div className=" p-5 border-b">
                        <div className="text-center px-3 py-2 lg:text-1xl shadow-sm shadow-current rounded-md">
                            <header className=''> Beyond-App </header>
                        </div>
                    </div>
                    
                    <div className={`mb-[12rem]`}>
                        <div className="pt-3 px-5 ">
                            <Link className="link" to='/' onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faHome} size='xs' /></div>
                                <div className="">Home</div>
                            </Link>
                            <Link to='/login' className="link" onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faAreaChart} size='xs' /></div>
                                <div className="">Analytic</div>
                            </Link>
                            <Link to='/' className="link" onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faPeopleGroup} size='xs' /></div>
                                <div className="">Clients</div>
                            </Link>
                            <Link to='/' className="link" onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faTasks} size='xs' /></div>
                                <div className="">Tasks</div>
                            </Link>
                            <NavDropdown header='Auth'>
                                <Link to='/login'  className="sub-link">
                                    <span className='mr-4'><FontAwesomeIcon icon={faSignInAlt} /></span>
                                    <span className="" onClick={()=>handleLink()}>Login</span>
                                </Link>
                                <Link className="sub-link" to='/signup' onClick={() => handleLink()}>
                                    <span className='mx-2'><FontAwesomeIcon icon={faUserPlus} size='xs' /></span>
                                    <span>Signup</span>  
                                </Link>
                            </NavDropdown>
                        </div>
                        <div className=" mt-6 px-5 ">
                            <Link to='/' className="link" onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faTools} size='xs' /></div>
                                <div className="">Settings</div>
                            </Link>
                            <Link to='/' className="link" onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faQuestionCircle} size='xs' /></div>
                                <div className="">About</div>
                            </Link>
                            <Link to='/' className="link" onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faQuestion} size='xs' /></div>
                                <div className="">Feedbacks</div>
                            </Link> 
                            <NavDropdown header='component'>
                                <Link className="sub-link" to='/table' onClick={()=>handleLink()}>
                                    <span></span>
                                    <span>Table</span>
                                </Link>
                                <div className="sub-link">Two2</div>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className=" top-0 border-t "></div>
                </div>
            </div>
        </div>
    )
}

export default SideNav


// 1. Using the size Prop
// Font Awesome provides predefined size options that you can use directly with the size prop. The available sizes are xs, sm, lg, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, and 10x.