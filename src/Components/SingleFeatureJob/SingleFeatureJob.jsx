import React from 'react';
import locationImg from '../../assets/icons/Location.png';
import moneyImg from "../../assets/icons/money.png";
const SingleFeatureJob = ({ jD }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jD
    return (
        <div className='border pl-8 py-8 m-3 rounded border-inherit '>
            <div>
                <img src={logo} alt="" />
                <h2 className='font-semibold pt-3'>{job_title}</h2>
                <p className='font-light'>{company_name}</p>
            </div>
            <div className='textColor flex'>
                <div className='border border-indigo-500 p-2 mr-2 my-2 rounded'>
                    {remote_or_onsite}
                </div>
                <div className='border border-indigo-500 p-2 my-2 ml-2 rounded'>
                    {job_type}
                </div>
            </div>
            <div className='flex'>
                <div className='flex mr-4'>
                    <img src={locationImg} alt="" />
                    <p>{location}</p>
                </div>
                <div className='flex '>
                    <img src={moneyImg} alt="" />
                    <p>{salary}</p>
                </div>
            </div>
            {/* set new compo link where details will be showed */}
            <button className='switch my-2'>View Details</button>
        </div>
    );
};

export default SingleFeatureJob;