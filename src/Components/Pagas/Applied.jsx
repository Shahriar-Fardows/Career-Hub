import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utiltes/utilites";


const Applied = () => {
   
    const jobs = useLoaderData();

    const [AppliedJob , setAppliedJob ] = useState([])
    console.log(AppliedJob)

    useEffect(()=>{
        const appliedId = getShoppingCart();
        // console.log(appliedId)
        if(jobs.length > 0){
            const jobId = [];
            for(const id of appliedId){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobId.push(job)
                }
            }
            setAppliedJob(jobId);
        }
    },[jobs])

    return (
        <div>
            
        </div>
    );
};

export default Applied;