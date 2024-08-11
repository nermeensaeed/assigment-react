import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
return (
    <>
    <div className='bg-[#2c3e50] py-16'>
        <div className='container flex flex-wrap mx-auto px-4 text-center'>
            <div className='w-full md:w-1/2 lg:w-1/3 text-white p-4'>
                <h3 className='font-bold text-2xl'>LOCATION</h3>
                <p className='text-lg mt-3'>2215 John Daniel Drive</p>
                <p className='text-lg mt-3'>Clark, MO 65243</p>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 text-white p-4'>
                <h3 className='font-bold text-2xl'>AROUND THE WEB</h3>
                <div className='flex flex-wrap items-center justify-center mt-4'>
                    <div className='p-3 border rounded-full w-10 h-10 flex flex-wrap items-center justify-center mr-2'><FontAwesomeIcon icon={faFacebook} /></div>
                    <div className='p-3 border rounded-full w-10 h-10 flex flex-wrap items-center justify-center mr-2'><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className='p-3 border rounded-full w-10 h-10 flex flex-wrap items-center justify-center mr-2'><FontAwesomeIcon icon={faLinkedin} /></div>
                    <div className='p-3 border rounded-full w-10 h-10 flex flex-wrap items-center justify-center mr-2'><FontAwesomeIcon icon={faGlobe} /></div>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 text-white p-4'>
                <h3 className='font-bold text-2xl'>ABOUT FREELANCER</h3>
                <p className='text-lg mt-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        
    </div>
    <div className='bg-[#1a252f] p-5 text-white text-center' >
        <p className='text-xl'>Copyright © Your Website 2021</p>
    </div>
    </>
)
}
