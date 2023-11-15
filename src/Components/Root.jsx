import { Outlet } from "react-router-dom";
import Foooter from "./Header &Footer/Foooter";
import Header from "./Header &Footer/Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto" >
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Foooter></Foooter>
        </div>
    );
};

export default Root;