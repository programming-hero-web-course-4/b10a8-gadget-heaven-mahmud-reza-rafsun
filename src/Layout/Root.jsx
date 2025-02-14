import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[270px]">
                <Outlet/>
            </div>
            <Footer/>     
        </div>
    );
};

export default Root;