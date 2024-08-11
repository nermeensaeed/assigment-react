import React from 'react'
import notfound from "./../../assets/R.png" 

export default function Notfound() {
return (
    <>
    <div className='container flex flex-wrap items-center justify-center flex-col  mx-auto'>
        <img src={notfound} alt=""  className='w-full'/>
    </div>
    </>
)
}
