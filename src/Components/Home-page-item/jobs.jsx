import { useEffect, useState } from "react";
import Job from "./Job";


const Jobs = () => {
    const [jobs, setJob] = useState([]);
    const [allJob, setAllJob] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data));
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 justify-items-center my-7">
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