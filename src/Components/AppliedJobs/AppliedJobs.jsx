import React, { useEffect, useState } from 'react';
import { getStoredJobApplication } from '../../localstorge';
import { useLoaderData } from 'react-router-dom';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';
// import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {


            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            // const jobsApplied = [];
            // for (const id of storedJobIds) {
            //     const job = jobs.find(job => job.id === id);
            //     console.log('JOB', job);
            //     if (job) {

            //         jobsApplied.push(job)
            //     }
            // }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <div className='flex justify-end'>
                <details className="dropdown mt-20  mr-10">
                    <summary className="m-1  mr-10 ">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content  bg-base-100 rounded-box w-52 ">
                        <li className='switch mt-1' onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li className='switch mt-1' onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li className='switch mt-1' onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className='grid grid-cols-2 '>
                {
                    displayJobs?.map(jD => <SingleFeatureJob
                        key={jD.id}
                        jD={jD}
                    ></SingleFeatureJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;