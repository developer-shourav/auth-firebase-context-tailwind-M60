import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProviders = ({children}) => {
    
const [user, setUser] = useState(null);

const createUser = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then( result => {

        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch ( error => {
        console.log(error.message);
    })
}

const authInfo = {
    user,
    createUser

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

