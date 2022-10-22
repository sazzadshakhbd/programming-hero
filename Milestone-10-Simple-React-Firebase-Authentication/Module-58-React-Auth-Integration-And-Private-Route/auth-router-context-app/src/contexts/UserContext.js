import React, { createContext, useState } from 'react';

import app from '../firebase/firebase';

import { getAuth } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Sazzad' });
    // const user = { displayName: 'Sazzad' }
    const authInfo = { user: user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;