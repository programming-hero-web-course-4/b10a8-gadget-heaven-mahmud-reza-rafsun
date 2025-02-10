import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[235px] max-w-6xl mx-auto">
                <Outlet/>
            </div>
            <Footer/>     
        </div>
    );
};

export default Root;