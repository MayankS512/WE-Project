import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = React.createContext();

function AuthWrapper({children}) {
    
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          }
        });
        setLoading(false);
    }, []);

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth)
    }

    function forgot(email){
        return sendPasswordResetEmail(auth, email)
    }

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const store = {
        login,
        logout,
        forgot,
        signup,
        user
    }

    return (
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthWrapper;