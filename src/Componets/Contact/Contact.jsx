import React, { useEffect } from 'react'
import Tittle from '../Tittle/Tittle'

export default function Contact() {
    useEffect(() => {
        document.title = "Contact"
    }, [])
return (
    <>
    <div className='bg-white py-10'>
        <div className='container flex flex-wrap items-center justify-center flex-col  mx-auto '>
            <Tittle tittle="conatct section" bgColor="bg-[#2c3e50]"/>
            <form className='flex flex-wrap flex-col items-center justify-center w-full mt-7'>
                <div className='w-full lg:w-9/12 mt-5'>
                    <input type="text" id="first_name" className="input" placeholder="userName"  />
                </div>
                <div className='w-full lg:w-9/12 mt-8'>
                    <input type="text" id="first_name" className="input" placeholder="userAge"  />
                </div>
                <div className='w-full lg:w-9/12 mt-8'>
                    <input type="email" id="first_name" className="input" placeholder="userEmail"  />
                </div>
                <div className='w-full lg:w-9/12 mt-8'>
                    <input type="text" id="first_name" className="input" placeholder="userPassword"  />
                </div>
                <div className='mt-8 ' >
                    <button className='p-4 bg-[#1abc9c] rounded-lg text-white'>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
)
}
