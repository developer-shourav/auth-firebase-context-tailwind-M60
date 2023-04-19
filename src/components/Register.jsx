import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const Register = () => {

   
  const allInfo = useContext(AuthContext);
  const {createUser} = allInfo;


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userName, email, password);
        createUser(email, password)
        
        Swal.fire(
          'Good job!',
          'Account created successfully!',
          'success',
        )

        form.reset();
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <Link to='/login'>Already registered ?<button className="btn btn-link"> Login now</button></Link>
              </div>
              <div className="form-control mt-6">
               <input className="btn btn-primary" type="submit" value="Register" />
              </div>
             
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
