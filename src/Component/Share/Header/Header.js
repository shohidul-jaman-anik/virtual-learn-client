import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./header.css";


const Header = () => {
    const menuItems = (
        <>
            <li id="sidebar" className="font-bold navLink">
                <NavLink to="/" className="">
                    Home
                </NavLink>
            </li>
            <li id="sidebar" className="font-bold navLink ">
                <NavLink to="/video">My Classes</NavLink>
            </li>

        </>
    );
    return (

        <div className=" navContainer ">
            <div className="  navbar bg-base-100">
                <div className='text-2xl font-semibold'>
                    <Link to="/">
                        Virtual Learn
                    </Link>
                </div>
                <div className="">
                    <div className="dropdown  dropdown-end flex !ml-auto">
                        <label tabIndex={0} className=" btn btn-ghost lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className=" dropdown-content mt-20  p-2 shadow bg-base-100 rounded-box w-52 "
                        >
                            <>
                                <li id="sidebar" className="font-bold navLink my-3">
                                    <NavLink to="/" className="my-14">
                                        Home
                                    </NavLink>
                                </li>
                                <li id="sidebar" className="font-bold navLink  my-3">
                                    <NavLink to="/video">My Classes</NavLink>
                                </li>
                            </>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end  hidden lg:flex">
                    <ul className=" items-center menu-horizontal whitespace-nowrap px-8">{menuItems}</ul>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Header;