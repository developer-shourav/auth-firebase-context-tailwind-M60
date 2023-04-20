import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";



const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut();
    
  }
  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">AuthMaster</a>
        <Link to='/' className="btn btn-ghost normal-case text-md">Home</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-md">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-md">Register</Link>
        {
          user ? <> <span>{user.email}</span>  <button onClick={handleLogOut}  className="btn btn-xs">Sign out</button> </>: ''
        }
        
      </div>
    </nav>
  );
};

export default Header;
