import { faAreaChart, faHome, faImage, faPeopleGroup, faQuestionCircle, faSignInAlt, faTasks, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { UseThemeContext } from '../contexts/ThemeContext'
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools'
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion'
import CustomInput from './forms/CustomInput'
import NavDropdown from './dropdowns/NavDropdown';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import Dropdown, { DropdownBody } from './dropdowns/Dropdown';
import DropdownItem from './dropdowns/DropdownItem';
import DropdownHeader from './dropdowns/DropdownHeader';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';

const SideNav = () => {
    const { mode, navRef, setLocation, closeNav} = UseThemeContext();
    const handleLink = () => {
        setLocation()
        closeNav()
    }
    return (
        <div className={` h-screen ${mode == 'light' ? 'bg-light text-[#1e1e1e]' : 'bg-gray-800 text-gray-100'} hidden text-opacity-95 md:block opacity-90 sidebar md:visible shadow-md shadow-[#999]`} ref={navRef}>
            <div className=" flex ">
                <div className={`w-[250px] h-screen font-bold font-serif relative `}>
                    <div className=" p-5 border-b">
                        <div className="text-center px-3 py-2 lg:text-1xl shadow-sm shadow-current rounded-md">
                            <header className=''> Beyond-App </header>
                        </div>
                    </div>
                    
                    <div className={`mb-[12rem] px-5`}>
                        <div className="pt-3">
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
                            <Link to='/gallery' className="link" onClick={()=>handleLink()}>
                                <div className=" mx-2"><FontAwesomeIcon icon={faImage} size='xs' /></div>
                                <div className="">Gallery</div>
                            </Link>
                            <NavDropdown header='Auth' style={''}>
                                <Link to='/login'  className="sub-link">
                                    <span className='mr-4'><FontAwesomeIcon icon={faSignInAlt} /></span>
                                    <span className="" onClick={()=>handleLink()}>Login</span>
                                </Link>
                                <Link className="sub-link" to='/signup' onClick={() => handleLink()}>
                                    <span className='mr-2'><FontAwesomeIcon icon={faUserPlus} /></span>
                                    <span>Signup</span>  
                                </Link>
                            </NavDropdown>
                            <Dropdown>
                                <DropdownHeader style={`link`}>
                                    <span className='mr-2'><FontAwesomeIcon icon={faFile} /></span>
                                    <span>Pages</span>
                                </DropdownHeader>
                                    <NavDropdown header='Pages' style={''}>
                                    <DropdownItem to={`/potfolio`}>
                                        <span className='mr-4'><FontAwesomeIcon icon={faSignInAlt} /></span>
                                        <span className="" onClick={()=>handleLink()}>Potfolio</span>
                                    </DropdownItem>
                                    <Link className="sub-link" to='/signup' onClick={() => handleLink()}>
                                        <span className='mr-2'><FontAwesomeIcon icon={faUserPlus} /></span>
                                        <span>Signup</span>  
                                    </Link>
                                    <Link className="sub-link" to='/cal' onClick={() => handleLink()}>
                                        <span className='mr-2'><FontAwesomeIcon icon={faUserPlus} /></span>
                                        <span>Cal</span>  
                                    </Link>
                                    <Link className="sub-link" to='/tic-tac' onClick={() => handleLink()}>
                                        <span className='mr-2'><FontAwesomeIcon icon={faUserPlus} /></span>
                                        <span>Tic Tac</span>  
                                    </Link>
                                    </NavDropdown>
                            </Dropdown>
                            
                        </div>
                        <div className=" mt-6 ">
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
                            <Dropdown style={'w-full'}>
                                <DropdownHeader>test</DropdownHeader>
                                <DropdownBody>
                                    <div className="sub-link">one</div>
                                    <div className="sub-link">two</div>
                                    <div className="sub-link">three</div>
                                </DropdownBody>
                            </Dropdown>
                            <Dropdown>
                                <DropdownHeader> Component</DropdownHeader>
                                <NavDropdown>
                                    <Link className="sub-link" to='/table' onClick={()=>handleLink()}>
                                        <span></span>
                                        <span>Table</span>
                                    </Link>
                                    <div className="sub-link">Two2</div>
                                </NavDropdown>
                            </Dropdown>
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