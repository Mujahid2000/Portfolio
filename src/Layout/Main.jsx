import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Nav";
import Footer from "./Footer";


const Main = () => {
    return (
        <div className="bg-slate-200 lg:pt-8">
            <ResponsiveAppBar></ResponsiveAppBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;