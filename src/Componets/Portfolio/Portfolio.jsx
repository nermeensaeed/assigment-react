import React, { useEffect } from 'react'
import Tittle from '../Tittle/Tittle'
import poer1 from './../../assets/poert1.png' 
import poer2 from './../../assets/port2.png' 
import poer3 from './../../assets/port3.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio"
    }, [])
return (
    <>
    <div className='bg-white py-10'>
        <div className='container flex flex-wrap items-center justify-center flex-col  mx-auto '>
            <Tittle tittle="portfolio component" bgColor="bg-[#2c3e50]"/>
            <div className='mt-8 flex flex-wrap '>
                <div className='w-full md:w-1/2 lg:w-1/3   p-5'>
                    <div className='relative rounded-xl overflow-hidden'>
                        <img src={poer1} alt="" className='w-full'/>
                        <div className='plus'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3  p-5'>
                    <div className='relative rounded-xl overflow-hidden'>
                        <img src={poer2} alt="" className='w-full'/>
                        <div className='plus'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 p-5'>
                    <div className='relative rounded-xl overflow-hidden'>
                        <img src={poer3} alt="" className='w-full'/>
                        <div className='plus'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3   p-5'>
                    <div className='relative rounded-xl overflow-hidden'>
                        <img src={poer1} alt="" className='w-full'/>
                        <div className='plus'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3  p-5'>
                    <div className='relative rounded-xl overflow-hidden'>
                        <img src={poer2} alt="" className='w-full'/>
                        <div className='plus'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 p-5'>
                    <div className='relative rounded-xl overflow-hidden'>
                        <img src={poer3} alt="" className='w-full'/>
                        <div className='plus'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
