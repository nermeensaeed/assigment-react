import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Tittle(props) {
return (
    <>
    <h1 className='uppercase font-bold text-5xl mt-10'>{props.tittle}</h1>
    <div className='flex  items-center justify-center mt-5'>
        <div className={`${props.bgColor} line mr-4`}></div>
        <FontAwesomeIcon icon={faStar} />
        <div className={`${props.bgColor} line ml-4`}></div>
    </div>
    </>
)
}
