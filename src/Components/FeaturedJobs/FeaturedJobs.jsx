import React, { useEffect, useState } from 'react';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';
import { Link, useLoaderData } from 'react-router-dom';
import { key } from 'localforage';

const FeaturedJobs = () => {
    const [jobDatas, setJobDatas] = useState([])
    const [visData, setVisData] = useState(4)
    const prevVisData = visData
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobDatas(data))
    }, [])

    const showMore = () => {
        setVisData(prevVisData => visData + 2)
    }

    return (
        <div className='my-16'>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold'>Iron-Man Jobs</h2>
                <p className='text-center my-4'><span className='textColor font-semibold '>Empower Your Career:</span> Explore Opportunities in Your Ideal Job Category.</p>
            </div>
            <div className='grid grid-cols-2'>
                {
                    jobDatas.slice(0, prevVisData).map(jD => <SingleFeatureJob
                        key={jD.id}
                        jD={jD}
                    ></SingleFeatureJob>)
                    
                }
                {/* {jobDatas.slice(0, prevVisData).map(jD => (
                    <React.Fragment key={jD.id}>
                        <SingleFeatureJob key={jD.id} jD={jD} />
                        <li>go</li>
                    </React.Fragment>
                ))} */}
            </div>
            {/* show more sector */}
            <div className='text-center'>
                {
                    visData < jobDatas.length && (<button className='switch my-3' onClick={() => showMore()}>Show More</button>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;