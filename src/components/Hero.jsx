import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className='text-stone-700'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-2xl text-lg text-stone-500 p2'>
                    control the controllables
                </p>
                <h1 className='md:text-8xl text-6xl font-bold md:py-6 py-3 text-emerald-900'>
                    Tom Galvin
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-xl text-md text-teal-700'>a creative, diligent and conscientious </p>
                    <Typed className='md:text-xl text-md text-teal-500 pl-1'
                        strings={['decathlete', 'front-end engineer', 'business analyst', 'data scientist']} 
                        typeSpeed={60} 
                        backSpeed={50}
                        loop/>
                </div>
                <button className='bg-emerald-50 
                    border-solid border-2 border-sky-100
                    rounded-lg py-2 md:my-7 my-5
                    md:w-[160px] w-[140px]
                    md:text-md text-sm
                    text-bold item-center my-4 mx-auto
                    hover:bg-emerald-700
                    hover:text-emerald-50
                    hover:border-transparent
                    hover:drop-shadow-lg'>
                    Say Hello 👋🏼
                </button>
            </div>
        </div>
    )
}

export default Hero;