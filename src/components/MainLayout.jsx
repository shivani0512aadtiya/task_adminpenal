import React, { useState } from 'react'
import { IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import Dashboard from './Dashboard';
import Home from './Home';

const MainLayout = () => {

  return (
    <div className=' flex justify-between'>
         <Dashboard />
         <Home />

    </div>
  )
}

export default MainLayout