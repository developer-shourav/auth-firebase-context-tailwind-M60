import React, { createContext } from 'react';

const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const user = { displayName: 'Shourav'}
    return (
        <AuthContext.Provider value={user}>
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;