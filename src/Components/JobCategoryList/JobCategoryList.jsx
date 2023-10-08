import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory';


const JobCategoryList = () => {
    const categories = useLoaderData()
    

    return (
        <div>
            <div className=''>
                <h2 className='text-3xl font-semibold text-center'>Job Category List</h2>
                <p className='text-center my-4'><span className='textColor font-semibold '>Empower Your Career:</span> Explore Opportunities in Your Ideal Job Category.</p>
            </div>
            <div className='flex'>
                {
                    categories ?.map(category =><SingleCategory
                    category={category}
                    key={category.id}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;