import React from 'react';

const SingleCategory = ({ category }) => {
    const { id, logo, category_name, availability } = category;
    return (
        <div className='bg-purple-50 bg-opacity-60 m-3 p-3 rounded w-72 h-52'>
            <div className='w-14 h-14 bg-purple-100 rounded-lg my-6 ml-4'>
                <img className='p-3' src={logo} alt="" />
            </div>
            <div className='ml-4'>
                <h2 className='font-bold'>{category_name}</h2>
                <p className='opacity-30 text-sm mt-3'>{availability}</p>
            </div>
        </div>
    );
};

export default SingleCategory;