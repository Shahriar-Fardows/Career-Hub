/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Categore from "./Categore";


const Category = () => {
     const [list , setList] = useState([]);
    // console.log(category , 'dsffffffffaj;lk')

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setList(data));
    }, [])

    console.log(list)


    return (
        <div>
            <div className="text-center my-10">

            <h1 className=" bold text-5xl m-4">Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="flex justify-around w-[65vw] mx-auto">
                {
                    list.map(data => <Categore
                    key={data}
                    data={data}
                    >
                    </Categore>)
                }
            </div>
        </div>
    );
};

export default Category;