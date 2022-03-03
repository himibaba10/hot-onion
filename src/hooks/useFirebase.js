import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user => user ? setUser(user) : setUser(null))
        return () => unsubscribed;
    },[auth])

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .catch(error => setError(error.message))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(()=> {
            setUser(null);
        })
    }

    return {
        user,
        error,
        handleGoogleSignIn,
        handleSignOut
    }
}

export default useFirebase;