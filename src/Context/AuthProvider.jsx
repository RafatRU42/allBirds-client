import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const googleSignIn = (provider) =>{
      return signInWithPopup(auth,provider)
      setLoading(true)
    }


    useEffect(() =>{
      const unSubscribe = onAuthStateChanged(auth,currentUser =>{
          setUser(currentUser)
          setLoading(false)
      })
  
      return () => unSubscribe()
  
      },[])


    const authInfo = {createUser,user,loading,googleSignIn}
    return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;