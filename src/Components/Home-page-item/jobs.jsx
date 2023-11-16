import { useEffect, useState } from "react";
import Job from "./Job";


const Jobs = () => {
    const [jobs, setJob] = useState([]);
    const [allJob, setAllJob] = useState(6);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data));
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-11">
            <div className="text-center">
                <h1 className="text-6xl my-2">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center my-7">
                {
                    jobs.slice(0, allJob).map(Alljob => <Job
                        key={Alljob.id}
                        Alljob={Alljob}
                    ></Job>)
                }
            </div>
            <div className={allJob === jobs.length && 'hidden'}>
                <div className="text-center mb-5">

                    <a onClick={() => setAllJob(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Show More!!!</a>

                </div>
            </div>
        </div>

    );
};

export default Jobs;