import { Outlet } from "react-router-dom";
import Foooter from "./Header &Footer/Foooter";
import Header from "./Header &Footer/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foooter></Foooter>
        </div>
    );
};

export default Root;