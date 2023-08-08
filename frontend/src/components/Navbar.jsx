import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="bg-[#4b5563e1]">
            <div className="flex justify-between items-center h-24 max-w-[1080px] mx-auto p-4">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">Pathogen ID</h1>
                <ul className="hidden md:flex uppercase">
                    <li className="p-4 text-white">Home</li>
                    <li className="p-4 text-white">About</li>
                </ul>

                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <AiOutlineClose size={20} /> :<AiOutlineMenu size={20} />}
                </div>

                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Pathogen ID</h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-[#414141] text-white">Home</li>
                        <li className="p-4 border-b border-[#414141] text-white">About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;