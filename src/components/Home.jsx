import React, { useState } from 'react'
import { IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className="flex-1 p-6">
                <header className="flex justify-end items-center space-x-2">
                    <div className=' flex w-28 h-8 p-1 pl-2 font-bold bg-slate-200 rounded'>
                      <span>00</span> : 
                      <span>03</span> :
                      <span>20</span>
                      <span className='w-6 h-6 ml-2 bg-pink-500 relative rounded-3xl'>
                        <span className='w-[14px] h-[14px] bg-white absolute m-[5px]  rounded-md'></span>
                      </span>
                    </div>
        <div className="relative text-right">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
                <div className='w-12 h-12 rounded-3xl bg-purple-600 relative'>
                    <img src='/user.png' alt='user' className='w-full h-full rounded-full' />
                    <span className='w-4 h-4 rounded-full absolute top-8 right-0 bg-green-400'></span>
                </div>
                <IoIosArrowDown size={25} className='mb-3' />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="p-4 flex items-center space-x-3">
                        <img src='/user.png' alt='user' className='w-10 h-10 rounded-full' />
                        <div>
                            <p className="text-gray-800 font-medium text-left">John Doe</p>
                            <p className="text-sm text-gray-500">UI/UX Designer</p>
                        </div>
                    </div>
                    <hr className="border-gray-200" />
                    <ul className="py-1">
                        <li className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 mx-1 rounded cursor-pointer">
                            <FaUserAlt className="mr-2" />
                            <span>Profile</span>
                        </li>
                        <li className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 mx-1 rounded cursor-pointer">
                            <MdAccountCircle className="mr-2" />
                            <span>Account Settings</span>
                        </li>
                        <li className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 mx-1 rounded cursor-pointer">
                            <IoIosLogOut className="mr-2" />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>

                </header>

                {/* Main content area */}
                <div className="mt-8">
                    {/* Your main content goes here */}
                </div>
            </div>
  )
}

export default Home