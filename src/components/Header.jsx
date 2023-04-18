import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">AuthMaster</a>
        <Link to='/' className="btn btn-ghost normal-case text-md">Home</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-md">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-md">Register</Link>
        
      </div>
    </nav>
  );
};

export default Header;
