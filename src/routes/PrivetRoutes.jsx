import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <img className='w-20' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' replace={true}> </Navigate>
};

export default PrivetRoutes;