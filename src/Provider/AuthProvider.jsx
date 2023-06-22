import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/Firebase_Config';


const auth = getAuth(app);
export const Authcontext=createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);

//////////Create User////////
    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
///////////Update Name////////

const updateUserProfile=(name,photourl)=>{
    console.log(name,photourl)
    setLoader(true)
    return   updateProfile(auth.currentUser, {
        displayName: `${name}`, photoURL: `${photourl}`
      })
}

///////////loginUser/////////
const loginUser=(email,password)=>{
    setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
}
/////////google login//////
const g_provider=new GoogleAuthProvider();
const googleSignin=()=>{
   return signInWithPopup(auth, g_provider)
}
////////////Github Signin/////
const git_provider = new GithubAuthProvider()
const githubSignin=()=>{
   return signInWithPopup(auth, git_provider)

}
////////////logOut////////////
const logoutUser=()=>{
    setLoader(true)
    signOut(auth).then(() => {
       console.log(user)
      }).catch((error) => {
        console.log(error)
      });
}

///////////////Observer//////////////
useEffect(()=>{
    const unsubcribe= onAuthStateChanged(auth, (loguser) => {
        setUser(loguser);
        setLoader(false)
      });

      return ()=>{ unsubcribe()};
},[])



    const authinfo = {
        user,
        loader,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        googleSignin,
        githubSignin
    };
    return (
     <Authcontext.Provider value={authinfo}>
        <>
        {children}
        </>
     </Authcontext.Provider>
    );
};

export default AuthProvider;