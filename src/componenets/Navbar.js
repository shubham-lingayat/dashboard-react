import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Buttons:  Login - Signup - Logout - Dashboard */}
      <div className="flex ml-5 mr-3 gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-slate-800 text-slate-100 px-[12px] rounded-[8px] border border-slate-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-slate-800 text-slate-100 px-[12px] rounded-[8px] border border-slate-700">
              Signup
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/login">
            <button
              className="bg-slate-800 text-slate-100 px-[12px] rounded-[8px] border border-slate-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-slate-800 text-slate-100 px-[12px] rounded-[8px] border border-slate-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
