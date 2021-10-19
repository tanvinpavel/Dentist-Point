import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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

  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
    .then(() => {})
    .catch(() => {});
  }

  const newAccount = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUserName(name);
        setUser(user);
        setError('');
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };

  const newUserLogin = (email, password) => {
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
