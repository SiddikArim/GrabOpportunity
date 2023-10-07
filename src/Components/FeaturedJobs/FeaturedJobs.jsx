import React, { useEffect, useState } from 'react';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';

const FeaturedJobs = () => {
    const [jobDatas, setJobDatas] = useState([])
    const [visData, setVisData] = useState(4)
    const prevVisData = visData
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobDatas(data))
    },[])
    
    const showMore = () => {
        setVisData(prevVisData=> visData+2)
    }
       
    return (
        <div>
            <h2>Companys we got :{jobDatas.length} </h2>
            {
                jobDatas.slice(0, prevVisData).map(jD => <SingleFeatureJob
                    key={jD.id}
                    jD={jD}
                    ></SingleFeatureJob> )
            }
            {/* show more sector */}
            {
                visData< jobDatas.length && (<button className='switch my-3' onClick={()=>showMore()}>Show More</button>) 
            }
        </div>
    );
};

export default FeaturedJobs;