/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Job = ({ Alljob }) => {
   

    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = Alljob;

   

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="p-5"><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <h2 className="text-xl">{company_name}</h2>
                <div className="flex items-center">
                    <div className="border border-[#7E90FE] mr-2 w-[20%] p-2">
                        <h1>{remote_or_onsite}</h1>
                    </div>
                    <div className="border border-[#7E90FE] w-[21%] p-2">
                        <h1>{job_type}</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="mr-8 flex items-center"> <IoLocationOutline />{location}</p>
                    <p>$Salary : {salary}</p>
                </div>

                <div className="card-actions ">
                    <Link to={`/jobDetails/${id}`}>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Job;