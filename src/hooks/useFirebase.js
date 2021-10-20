import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  
  const newUserLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then(() => {
      setUser({});
      console.log("sign out successfully");
    })
    .finally(() => setIsLoading(false));
  };
  
  const newAccount = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  return {
    user,
    error,
    isLoading,
    setUser,
    setError,
    googleSignIn,
    userSignOut,
    setIsLoading,
    newAccount,
    newUserLogin,
  };
};

export default useFirebase;
