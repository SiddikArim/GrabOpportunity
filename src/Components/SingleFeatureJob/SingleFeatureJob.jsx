import React from 'react';

const SingleFeatureJob = ({ jD }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jD
    return (
        <div className='border m-3 p-3 rounded border-inherit'>
            <div>
                <img src={logo} alt="" />
                <h2 className='font-semibold pt-3'>{job_title}</h2>
                <p className='font-light'>{company_name}</p>
            </div>
            <div className='textColor flex'>
                <div className='border border-indigo-500 p-2 m-2 rounded'>
                    {remote_or_onsite}
                </div>
                <div className='border border-indigo-500 p-2 m-2 rounded'>
                    {job_type}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SingleFeatureJob;