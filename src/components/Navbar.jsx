import React from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import logoImg from "../assets/more/logo1.png";

const Navbar = () => {
  // const data = useContext(AuthContext);
  // console.log(data);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"addNewCoffee"}>Add New Coffee</NavLink>
      </li>
      <li>
        <NavLink to={"users"}>Users </NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-10" src={logoImg} alt="" />
            <h2 className=" text-3xl font-bold">Coffee Store</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link to={"/signIn"} className="btn">
            Sign In
          </Link>
          <Link to={"/signUp"} className="btn">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
