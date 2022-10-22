import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase/firebase';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Sazzad' });
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Why are you doing this
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('auth state changed ', currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { user, createUser, signIn, logOut, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;