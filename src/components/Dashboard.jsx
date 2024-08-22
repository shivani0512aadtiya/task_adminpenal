import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { RiFeedbackLine } from "react-icons/ri";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import MobileResponsiveDashboard from './MobileResponsiveDashboard';
import MainLayout from './MainLayout';


const Dashboard = () => {
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    return (
        <div className="flex h-screen ">
            {/* Sidebar */}
            <aside className="w-64 border-l p-2  border-r border-gray-300">
                <div className="flex gap-1 bg-white w-48 p-1 m-2 border border-gray-300 rounded-md">
                    <CiSearch className="mt-1" />
                    <input
                        type="search"
                        placeholder="search"
                        className="bg-transparent w-36 outline-none"
                    />
                </div>
                <hr className="mt-2 w-full" />
                <nav className="mt-2 m-2">
                    <ul className="space-y-1">
                        <li className='relative'>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <RxDashboard />
                                <span onClick={toggleDropdown1}>Dashboard</span>
                            </a>
                        </li>
                        <span className='bg-gray-500 text-white p-[1px] absolute top-[38px] ml-2'> my option</span>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <RiFeedbackLine />
                                <span>Feedbacks</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <FiUserX />
                                <span>Leaves</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <FiUserCheck />
                                <span>Attendance</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <IoCalendarOutline />
                                <span>Daily Timesheet</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <MdOutlineWorkHistory />
                                <span>Work Log</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <IoMdRefresh />
                                <span>Reimbursements</span>
                            </a>
                        </li>
                    </ul>
                    <hr className="mt-4 w-full" />
                    <ul className="space-y-1">
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <RxDashboard />
                                <span>Reports</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <RiFeedbackLine />
                                <span>My Expenses</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <FiUserX />
                                <span>Income</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <FiUserCheck />
                                <span>Categories</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 gap-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <IoCalendarOutline />
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
           
        </div>
    );
};

export default Dashboard;
