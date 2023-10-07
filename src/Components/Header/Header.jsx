import React from 'react';
import ironman from '../../assets/ironman.png'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between background'>
                <div style={{ width: '570px' }} className='justify-end'>
                    <img className='rounded' src={ironman} alt="" />
                </div>
                <div style={{ width: '570px', height: '520px' }} className='align-baseline my-16 '>
                    <h2 className='text-5xl'>Be an Iron-Man in your  <span className='bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent'>Career </span></h2>
                    <p className='my-5'>"<span className='textColor font-bold'>Embark on your journey to success!</span> Each job opportunity is a stepping stone to your dreams. Embrace challenges, learn, and grow. Your unique skills are in demand. Believe in your potential, persevere through setbacks, and let every application be a step closer to your professional aspirations. <span className='textColor font-semibold'>Your time is now!</span>"</p>
                    <button className='switch my-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;