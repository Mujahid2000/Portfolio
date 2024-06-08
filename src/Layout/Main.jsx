import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Nav";


const Main = () => {
    return (
        <div className=" ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;