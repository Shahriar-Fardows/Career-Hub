
import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import {  addToDb, } from "../../utiltes/utilites";

const JobDetailes = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    
    const notify = () => {
        toast.success('Successfully toasted!')
    };

    const click = () =>{
        notify();
        // saveJobId(idInt);
        addToDb(idInt);
    }
   

    return (
        <div >
            
            <div className="h-[30vh] flex text-center justify-center items-center bg-[#7e8ffe1c]">
                <h1 className="text-4xl bold ">Job Details!!!!!</h1>
            </div>
            <div className=" grid grid-cols-4 my-10 max-w-6xl mx-auto">
                <div className=" mr-5 col-span-3 ">
                    <h2 className="text-[#757575]"><span className="bold text-lg text-[#1A1919]">Job Description: </span> {job.job_description}</h2><br />
                    <h2 className="text-[#757575]"><span className="bold text-lg text-[#1A1919]">Job Responsibility: </span> {job.job_responsibility}</h2><br />
                    <h2 className="text-[#757575]"><span className="bold text-lg text-[#1A1919]">Educational Requirements: </span> {job.educational_requirements}</h2><br />
                    <h2 className="text-[#757575]"><span className="bold text-lg text-[#1A1919]">Job Description: </span> {job.experiences}</h2><br />

                </div>
                <div className=" col-span-1">
                    <div className="bg-[#7e8ffe1c] p-3">
                        <h1 className="text-lg bold ">Job Details!!!!!</h1> <hr />
                        <div className="flex m-2">
                            <img className="mr-1" src="https://i.ibb.co/vsZp6Jt/money.png" alt="" />
                            <h1>Salary: {job.salary}</h1>
                        </div>
                        <div className="flex m-2 ">
                            <img className="w-[20px] h-[30px] mr-1 mb-1" src="https://i.ibb.co/RC6spYh/calendar.png" alt="" />
                            <h1>Job Title: {job.job_title}</h1>
                        </div>

                        <h1 className="bold text-lg">Contact Information</h1>

                        <hr />
                        <div className="flex m-2">
                            <img className="mr-1" src="https://i.ibb.co/jLNGddp/phone.png" alt="" />
                            <h1>Phone: {job.contact_information.phone}</h1>
                        </div>
                        <div className="flex m-2">
                            <img className="mr-1" src="https://i.ibb.co/j5Gwfnq/email.png" alt="" />
                            <h1>Email: {job.contact_information.email}</h1>
                        </div>
                        <div className="flex m-2">
                            <img className="mr-1 w-[20px] h-[30px]" src="https://i.ibb.co/89K4T1X/location2.png" alt="" />
                            <h1>Address: {job.contact_information.address}</h1>
                        </div>

                    </div>

                    <button onClick={click} className="btn w-full my-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Apply Now</button>
                </div>
                
            </div>
            <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
        </div>
    );
};

export default JobDetailes;

