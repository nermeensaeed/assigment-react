import React, { useEffect } from 'react'
import Tittle from '../Tittle/Tittle'

export default function About() {
    useEffect(() => {
        document.title = "About"
    }, [])
return (
    <>
    <div className='bg-[#1abc9c] py-44'>
        <div className='container flex flex-wrap items-center justify-center flex-col  text-white mx-auto '>
            <Tittle tittle="about component" bgColor="bg-white"/>
            <div className='flex flex-wrap items-center justify-center mt-5'>
                <p className='w-1/2 text-xl'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='w-1/2 text-xl'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    </div>
    </>
)
}
