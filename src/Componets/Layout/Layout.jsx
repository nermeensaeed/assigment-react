import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    const [padding, setPadding] = useState(false)
    const changePadding = ()=>{
        if(window.scrollY >= 100){
            setPadding(true)
        }else{
            setPadding(false)
        }
    }
    window.addEventListener("scroll" , changePadding)
return (
    <>
    <Navbar/>
    <div className={`${padding ? "pt-24" :null} transition-all duration-300`}>
        <Outlet/>
    </div>
    <Footer/>
    </>
)
}
