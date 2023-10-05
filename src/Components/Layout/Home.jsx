import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className=''>
            <div className='logo'>
                <NavLink to='/main-content' className={({ isActive, isPending }) => isActive ? "text-purple-500" : isPending ? "pending" : ""}>
                    GrabOpportunity
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
                <button className='btn btn-primary'>
                    <NavLink to='/main-content' className={({ isActive, isPending }) => isActive ? "text-purple-500" : isPending ? "pending" : ""}>
                        Start Applying
                    </NavLink>
                </button>
                <button className='bg-slate-400 p-2 rounded'>no</button>
            </div>
        </div>
    );
};

export default Home;