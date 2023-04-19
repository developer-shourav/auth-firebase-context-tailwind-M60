import React, { createContext } from 'react';

export const AuthContext = createContext(null);


const AuthProviders = ({children}) => {
    const user = {displayName:'Shourav'};
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

