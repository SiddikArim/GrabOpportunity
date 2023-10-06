import React from 'react';
import ironman from '../../assets/ironman.png'
const MainContent = () => {
    return (
        <div className='flex justify-between'>
            <div className='justify-end'>
                <img className='rounded' src={ironman} alt="" />
            </div>
            <div className='justify-center w-8/12 border-solid'>
                <h2 className='text-5xl'>Be an Iron-Man in your <span className='bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent'>Career </span></h2>
            </div>
        </div>
    );
};

export default MainContent;