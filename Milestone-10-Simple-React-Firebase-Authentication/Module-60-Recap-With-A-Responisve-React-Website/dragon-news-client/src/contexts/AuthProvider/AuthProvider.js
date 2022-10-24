import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'Sazzad' };
    const [user, setUser] = useState(null);


    const providerLogin = (provider) => {
        signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User Inside State Changed ', currentUser);
            setUser(currentUser);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { user, providerLogin }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;