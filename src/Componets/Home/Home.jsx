import React, { useEffect } from 'react'
import avter from "./../../assets/avataaars.svg"
import Tittle from '../Tittle/Tittle'

export default function Home() {
    useEffect(() => {
        document.title = "Home"
    }, [])
    
return (
    <>
    <div className='bg-[#1abc9c]'>
        <div className='container flex flex-wrap items-center justify-center flex-col  text-white mx-auto py-12'>
            <div className='w-[300px]'>
                <img src={avter} alt=""  className='w-full'/>
            </div>
            <Tittle tittle="start Framework" bgColor="bg-white"/>
            <p className='mt-5 text-lg'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
)
}
