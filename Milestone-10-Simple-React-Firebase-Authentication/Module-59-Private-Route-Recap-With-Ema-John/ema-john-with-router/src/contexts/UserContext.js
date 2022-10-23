import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
    }
    const authInfo = { user, createUser, signIn, logOut }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;