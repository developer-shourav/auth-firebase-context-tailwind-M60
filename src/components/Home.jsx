import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';


const Home = () => {
    const userInfo = useContext(AuthContext);

   const {displayName} = userInfo;

    return (
        <div>
            <h2>This is home {displayName} </h2>
        </div>
    );
};

export default Home;