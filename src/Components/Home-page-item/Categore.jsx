/* eslint-disable react/prop-types */

const Categore = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {availability, category_name, logo} = data;
    return (
        <div className="border border-[#7E90FE] w-[15%] p-6 mr-[20px] bg-[#7e8ffe1c] ">
            <img src={logo} alt="" />
            <h1 className="bold text-lg">{category_name}</h1>
            <h1>{availability}</h1>
        </div>
    );
};

export default Categore;