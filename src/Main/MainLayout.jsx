import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div className=''>
            <Navbar></Navbar>
            </div>
            <div className=''>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;