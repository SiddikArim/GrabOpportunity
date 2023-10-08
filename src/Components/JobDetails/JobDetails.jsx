import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../localstorge';
import money from '../../assets/icons/money.png';
import calender from '../../assets/icons/calendar.png';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';
import address from '../../assets/icons/location2.png';
import './JobDetails.css'
const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams();
    const parseID = parseInt(id)
    const job = jobs.find(job => job.id === parseID);
    const { job_title, company_name, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job
    console.log(job);


    const handleApplyJob = () => {
        saveJobApplication(parseID);
        toast(`Successfully applied ${job.company_name}`);
    }

    return (
        <div>
            {/* header section */}
            <div className='bg-img'>
                <h2 className='text-3xl font-bold flex justify-center items-center py-14 '>Job Details</h2>
            </div>
            {/* description section and apply*/}
            <div className='md:flex mt-10'>
                {/* description sector */}
                <div className='md:w-3/4'>
                    <p className='mt-4 mb-2'>
                        <span className='font-bold'>Job Description:</span> {job_description}
                    </p>
                    <p className='my-3'>
                        <span className='font-bold'> Job Responsibility:</span> {job_responsibility}
                    </p>
                    <p className='my-3'>
                        <span className='font-bold '> Education Requirements :</span> <br /> {educational_requirements}
                    </p>
                    <p className='mt-3'>
                        <span className='font-bold '> Experience:</span> <br /> {experiences}
                    </p>
                </div>
                {/* Apply sector */}
                <div>
                <div  className='bg-purple-200 bg-opacity-60 md:w-96 m-3 p-3 rounded'>
                    <h2 className='font-bold text-xl'>Job Details</h2>
                    <hr className=' border-t border-gray-300 my-4' />
                        <p className='flex pb-4'><img className='pr-2' src={money} alt="" /> <span className='font-bold'>Salary : </span>  {salary} (per month)</p>
                        <p className='flex'><img className='pr-2' src={calender} alt="" /> <span className='font-bold'>Job Title : </span>  {job_title}</p>
                        <h2 className='font-bold text-xl my-2 pt-3'>Job Details</h2>
                        <hr className='border-t border-gray-300 my-4' />
                        <p className='flex pb-3'> <img className='pr-2' src={phone} alt="" /><span className='font-bold'>Phone : </span>  {contact_information.phone}</p>
                        <p className='flex pb-3'> <img className='pr-2' src={email} alt="" /><span className='font-bold'>email : </span>  {contact_information.email}</p>
                        <p className='flex pb-3'> <img className='pr-2 h-6' src={address} alt="" /><span className='font-bold'>Address </span> <span> : {contact_information.address}</span></p>
                </div>
                <button onClick={handleApplyJob} className='switch ml-3 w-96'>Be an Iron-Man of <span className=' text-yellow-200'>{company_name}</span> </button>
                </div>
            </div>


            <ToastContainer />
        </div>
    );
};

export default JobDetails;