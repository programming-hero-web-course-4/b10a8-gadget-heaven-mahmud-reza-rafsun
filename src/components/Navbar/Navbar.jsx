import { NavLink } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Statistics</NavLink></li>
                    <li><NavLink>Dashboard</NavLink></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-5 px-1">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Statistics</NavLink></li>
                    <li><NavLink>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <BsCart3 className="text-xl"/>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                    </div>
                </div>
                <div className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FcLike className="text-2xl" />
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;