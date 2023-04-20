import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProviders = ({children}) => {
    
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {

   return createUserWithEmailAndPassword(auth, email, password)
    
}

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth,  email, password);
}

useEffect( () => {
   const unsubscribe =  onAuthStateChanged(auth , currentUser => {
        console.log("auth stage changed", currentUser);
        setUser(currentUser)
        setLoading(false)
    })

    return () => {
        unsubscribe();
    }
} , [])

const logOut = () => {
    signOut(auth)
    .then( () => {
        console.log('SignOut successful');
    })
    .catch (error => {
        console.log(error.message);
    })
}



const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

