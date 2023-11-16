// import img from '../../assets/images/user';
const Banner = () => {
    return (
        <div className=" flex justify-center items-center bg-[#7e8ffe1c]">
            <div>
                <h1 className="text-6xl bold ">One Step </h1>
                <h1 className="text-6xl bold my-5">  Closer To Your </h1>
                <h1 className="text-6xl bold text-[#7E90FE] ">Dream Job</h1>
                <p className="leading-8 m-2">
                    Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                </p>
                <div className="">
                    <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Start Applying</a>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/7GpHQvp/user.png" alt="User-img" />
            </div>
        </div>
    );
};

export default Banner;