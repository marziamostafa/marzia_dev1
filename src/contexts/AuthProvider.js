import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/'


export const AuthContext = createContext()


const AuthProvider = () => {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider></AuthContext.Provider>
    );
};

export default AuthProvider;