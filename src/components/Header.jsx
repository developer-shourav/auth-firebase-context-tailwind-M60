import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";



const Header = () => {

  const {user} = useContext(AuthContext)
  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">{user ? user.email : 'AuthMaster'}</a>
        <Link to='/' className="btn btn-ghost normal-case text-md">Home</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-md">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-md">Register</Link>
        
      </div>
    </nav>
  );
};

export default Header;
