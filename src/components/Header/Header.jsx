import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>

        <li className="work font-normal text-lg text-[#131313CC]"><NavLink to="/">Home</NavLink></li>

        <li className="work font-normal text-lg text-[#131313CC]"><NavLink to="/listedBooks">Listed Books</NavLink></li>

        <li className="work font-normal text-lg text-[#131313CC]"><NavLink to="/pagesToRead">Pages To Read</NavLink></li>

        <li className="work font-normal text-lg text-[#131313CC]"><NavLink to="/popular">Popular</NavLink></li>

        <li className="work font-normal text-lg text-[#131313CC]"><NavLink to="/aboutUs">About Us</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {
                                links
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-3xl work">SaltyLibrary</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            links
                        }

                    </ul>
                </div>
                <div className="navbar-end hidden lg:block">
                    <a className="btn mr-4 work font-semibold text-lg text-white bg-[#23BE0A] rounded-[8px]">Sign In</a>
                    <a className="btn work font-semibold text-lg text-white bg-[#59C6D2] rounded-[8px]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;