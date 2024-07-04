import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks =
        <>
            <li><NavLink to="/" style={({ isActive }) => ({
                color: isActive ? '#fff' : '#B968C7',
                background: isActive ? '#B968C7' : 'transparent',
                fontWeight: isActive ? 'bold' : 'normal',
            })}>Home</NavLink></li>

            <li><NavLink to={"/about"} style={({ isActive }) => ({
                color: isActive ? '#fff' : '#B968C7',
                background: isActive ? '#B968C7' : 'transparent',
                fontWeight: isActive ? 'bold' : 'normal',
            })}>About</NavLink></li>

            <li><NavLink to={"/projects"} style={({ isActive }) => ({
                color: isActive ? '#fff' : '#B968C7',
                background: isActive ? '#B968C7' : 'transparent',
                fontWeight: isActive ? 'bold' : 'normal',
            })}
            >Projects</NavLink></li>

            <li><NavLink to={"/resume"} style={({ isActive }) => ({
                color: isActive ? '#fff' : '#B968C7',
                background: isActive ? '#B968C7' : 'transparent',
                fontWeight: isActive ? 'bold' : 'normal',
            })}>Resume</NavLink></li>
        </>

    return (
        <div className=" lg:top-0 lg:w-full lg:z-50 lg:fixed">
            <div className="navbar lg:max-w-7xl mx-auto backdrop-blur-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow backdrop-blur-md z-50">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-4xl font-bold text-[#B968C7] ">AMR</Link>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;