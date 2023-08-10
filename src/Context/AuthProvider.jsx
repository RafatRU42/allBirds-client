import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


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

    const updateUser = (userInfo) =>{
      return updateProfile(auth.currentUser,userInfo)
      setLoading(true)
    }

    const logOut = () =>{
      return signOut(auth)
    }

    const loginWithPassword = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
      setLoading(true)
    }


    useEffect(() =>{
      const unSubscribe = onAuthStateChanged(auth,currentUser =>{
          setUser(currentUser)
          setLoading(false)
      })
  
      return () => unSubscribe()
  
      },[])


    const authInfo = {createUser,user,loading,googleSignIn,logOut,updateUser,loginWithPassword}
    return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;