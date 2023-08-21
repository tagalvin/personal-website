import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const[nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
    <div className='text-stone-700 flex justify-between items-center h-10 max-w-[1240px] mx-auto px-2'>
        <h1 className='text-4xl font-bold'>
            tg.
        </h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-stone-400'>home.</li>
            <li className='p-4 hover:text-stone-400'>professional.</li>
            <li className='p-4 hover:text-stone-400'>sport.</li>
            <li className='p-4 hover:text-stone-400'>learning.</li>
            <li className='p-4 hover:text-stone-400'>contact.</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} className='fill-stone-700 hover:fill-stone-400'/> : <AiOutlineMenu size={20} className='fill-stone-700 hover:fill-stone-400'/>}
        </div>
        <div className={!nav ? 'fixed text-left top-0 left-0.5 w-[70%] h-full bg-[honeydew] ease-in-out duration-700' 
                        : 'fixed left-[-100%]'}>
            <h1 className='w-full text-4xl font-bold pt-8 pl-8'>
                menu.
            </h1>

            <ul className='p-4'> 
                <li className='p-4 border-b border-b-stone-300 hover:text-stone-400'>home.</li>
                <li className='p-4 border-b border-b-stone-300 hover:text-stone-400'>professional.</li>
                <li className='p-4 border-b border-b-stone-300 hover:text-stone-400'>sport.</li>
                <li className='p-4 border-b border-b-stone-300 hover:text-stone-400'>learning.</li>
                <li className='p-4 border-b border-b-stone-300 hover:text-stone-400'>contact.</li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;