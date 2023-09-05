import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>                
            
            {/* Menu */}   
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">Pathogen ID</h1>
            <ul className="hidden md:flex uppercase">
                <li className="p-4 text-white hover:text-[#00df9a] duration-300">
                    <a href="/">Home</a>
                </li>
                <li className="p-4 text-white hover:text-[#00df9a] duration-300">
                    <a href="/about">About</a>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 hover:text-[#00df9a]'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <div>
                <ul 
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
                >
                    <li className="p-4 border-b border-[#414141] text-white hover:text-[#00df9a] duration-300"><a href="/">Home</a></li>
                    <li className="p-4 border-b border-[#414141] text-white hover:text-[#00df9a] duration-300"><a href="/about">About</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar;