import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const changeNavbarSize = ()=>{
        if(window.scrollY >= 90){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener("scroll" , changeNavbarSize)
return (
    <>
    
    <nav className={`${navbar? "navbar py-4" :"py-8"} bg-[#2c3e50] transition-all duration-1000 `}  >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center  whitespace-nowrap text-white font-bold text-4xl">START FREAMWORK</span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-14 h-10 border border-black justify-center text-xl text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-black  " aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                
                <li className='mt-5 md:mt-0'>
                <NavLink to="about" className="text-lg text-white font-bold p-3">ABOUT</NavLink>
                </li>
                <li className='mt-5 md:mt-0'>
                <NavLink to="portfolio" className="text-lg text-white font-bold p-3 ">PORTFOLIO</NavLink>
                </li>
                <li className='mt-5 md:mt-0'>
                <NavLink to="contact" className="text-lg text-white font-bold p-3 ">CONTACT</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    </>
)
}
