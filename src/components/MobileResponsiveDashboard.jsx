import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { RiFeedbackLine } from 'react-icons/ri';
import { FiUserCheck, FiUserX, FiAlignLeft } from 'react-icons/fi';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import Dashboard from './Dashboard';
import { RxCross2 } from "react-icons/rx";

const MobileResponsiveDashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="mt-4 p-2 md:hidden">
            {/* Icon to toggle Dashboard */}
            <div className="flex items-center">
                <FiAlignLeft size={24} onClick={togglePopup} className="ms-2 cursor-pointer" />
                <span className="ms-2 font-bold">ZH</span>
            </div>
            <hr className="mt-2 w-full" />
            
            {/* Sidebar Icons */}
            <div className="flex flex-col p-2 mt-2 space-y-6">
                <RxDashboard size={24} className="hover:text-blue-500 cursor-pointer" />
                <RiFeedbackLine size={24} className="hover:text-blue-500 cursor-pointer" />
                <FiUserX size={24} className="hover:text-blue-500 cursor-pointer" />
                <FiUserCheck size={24} className="hover:text-blue-500 cursor-pointer" />
                <IoCalendarOutline size={24} className="hover:text-blue-500 cursor-pointer" />
                <MdOutlineWorkHistory size={24} className="hover:text-blue-500 cursor-pointer" />
                <IoMdRefresh size={24} className="hover:text-blue-500 cursor-pointer" />
            </div>

            {/* Popup displaying the Dashboard component */}
            {isPopupOpen && (
                <div className="absolute top-0 left-0 mt-[28px] w-full h-full bg-gray-900 bg-opacity-50 flex items-center z-50">
                     <span onClick={togglePopup} className="mt-4 px-4 py-2 absolute top-[-7px] right-[98px]">
                           <RxCross2 size={25}/>
                        </span>
                    <div className="bg-white p-4 rounded shadow-lg">
                        <Dashboard />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileResponsiveDashboard;
