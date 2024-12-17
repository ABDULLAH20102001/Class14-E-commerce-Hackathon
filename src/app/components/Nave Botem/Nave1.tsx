import React from 'react'

import { useState } from 'react';                     //Dropdown Button
import { RiArrowDropDownLine } from "react-icons/ri"; //icons ▼
import { AiOutlineHeart } from "react-icons/ai";    //icons ❤

import { LiaShoppingCartSolid } from "react-icons/lia";//icons 🛒
import { CiSearch } from "react-icons/ci";             //icons search-bar









const Nave1 = () => {

    const [isEnglishOpen, setIsEnglishOpen] = useState(false);
    const [isUSAOpen, setIsUSAOpen] = useState(false);
    const [isHomeOpen, setIsHomeOpen] = useState(false);

    // const [query, setQuery] = useState('');
    // Search bar query state





    // Toggle Country dropdown
    const toggleEnglishDropdown = () => {
        setIsEnglishOpen(!isEnglishOpen);
    };

    // Toggle Product dropdown
    const toggleUSADropdown = () => {
        setIsUSAOpen(!isUSAOpen);
    };
    // Toggle Country dropdown
    const toggleHomeDropdown = () => {
        setIsHomeOpen(!isHomeOpen);
    };

















    return (
        <div className=' w-[1263] max-w-screen-xl justify-center items-center  mx-auto'>
            <div className='flex bg-[#7E33E0] justify-around h-[25]  text-white text-xs'>
                <div className='flex  items-center gap-1'>
                    <div className=' '>
                        <h2>Abdullah@gmail.com</h2>
                    </div>
                    <div className=''>
                        <h2>03183004230</h2>
                    </div>
                </div>
                <div className=' flex items-center space-y-'>
                    {/* Country Dropdown */}
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleEnglishDropdown}
                            className="   px-  rounded-md hover:text-base hover:w-[100]  w-[100]  focus:outline-none">
                            <div className='flex items-center'>
                                <div className='pt-'>English</div>
                                <div className='text-2xl  '><RiArrowDropDownLine /></div>
                            </div>
                        </button>
                        {isEnglishOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">USA</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">India</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Canada</li>
                            </ul>
                        )}
                    </div>
                    {/* Product Dropdown */}
                    <div className="relative inline-block text-left">

                        <button
                            onClick={toggleUSADropdown}
                            className="  py pxrounded-md hover:text-base hover:w-[80]  w-[80] focus:outline-none">
                            <div className='flex items-center '>
                                <div className='pt'>USA</div>
                                <div className='text-2xl '><RiArrowDropDownLine /></div>
                            </div>
                        </button>

                        {isUSAOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                {/* <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Laptop</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Phone</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Tablet</li> */}

                                <li key="1" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">USA</li>
                                <li key="2" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">India</li>
                                <li key="3" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Canada</li>
                            </ul>
                        )}
                    </div>

                    <div className='flex'>
                        <div className='flex items-center hover:text-base hover:w-[80]  w-[80]'>
                            <h2>Login</h2>
                            <h2><AiOutlineHeart /></h2>
                        </div>
                        <div className='flex items-center hover:text-base hover:w-[70]  w-[70]'>
                            <h2>Wishlist </h2>
                            <h2><AiOutlineHeart /></h2>
                        </div>
                        <div className='flex items-center text-xl pl-4 hover:text-2xl hover:w-[70]  w-[70]'>
                            <h2><LiaShoppingCartSolid /></h2>
                        </div>
                    </div>

                </div>

            </div>









            <div>
                <div className='flex    items-center gap- text-sm bg-slate-400 h-14 text-black'>
                    <div className='ml-[170]'><h2 className='text-xl pr-10   hover:text-2xl hover:w-[95]  w-[95]'>Hekto</h2></div>
                    <nav>
                        <ul className='flex items-center gap-4'>
                            <li>
                                {/* Country Dropdown */}
                                <div className="relative inline-block text-left">
                                    <button
                                        onClick={toggleHomeDropdown}
                                        className="  items-center  px-  rounded-md hover:text-base hover:w-[50]  w-[50]  focus:outline-none">
                                        <div className='flex items-center'>
                                            <div className=' '>Home</div>
                                            <div className='text-2xl  '><RiArrowDropDownLine /></div>
                                        </div>
                                    </button>
                                    {isHomeOpen && (
                                        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                            <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50] ">Home1</li>
                                            <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Page2</li>
                                            <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">File3</li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                            <li className='hover:text-base hover:w-[43]  w-[43]'>Pages</li>
                            <li className='hover:text-base hover:w-[55]  w-[55]'>Products</li>
                            <li className='hover:text-base hover:w-[43]  w-[43]'>Bloge</li>
                            <li className='hover:text-base hover:w-[43]  w-[43]'>Shop</li>
                            <li className='hover:text-base hover:w-[43]  w-[43]'>Contact</li>
                        </ul>
                    </nav>
                    <div>
                        <div className="search-bar flex pl-[130] text-black ">
                            <input
                                type="text"

                                placeholder="Search..."
                                className="search-input focus:outline-none border-2 py-[2]  "
                            />
                            <button className=" flex justify-center w-6 items-center bg-pink-500 text-white text-lg">
                                <CiSearch />
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>







    )
}
export default Nave1;

















