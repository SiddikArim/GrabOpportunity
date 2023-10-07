import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className='flex justify-between mt-5'>
            <div className='logo'>
                <NavLink to='/header' className={({ isActive, isPending }) => isActive ? '' : isPending ? "pending" : ""}>
                    <span className='text-3xl font-bold textColor'>GrabOpportunity</span>
                </NavLink>
            </div>
            <NavLink to='/applied-jobs' className={({ isActive, isPending }) => isActive ? "text-purple-500" : isPending ? "pending" : ""}>
                Applied Jobs
            </NavLink>
            <NavLink to='/statistics' className={({ isActive, isPending }) => isActive ? "text-purple-500" : isPending ? "pending" : ""}>
                Statistics
            </NavLink>
            <NavLink to='/blog' className={({ isActive, isPending }) => isActive ? "text-purple-500" : isPending ? "pending" : ""}>
                Blog
            </NavLink>
            <div>
                <button className='switch'>
                    <NavLink to='/header' className={({ isActive, isPending }) => isActive ? "text-white-500" : isPending ? "pending" : ""}>
                        Start Applying
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default Home;