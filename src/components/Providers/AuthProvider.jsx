import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import Auth from "../AuthLayout/Auth";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (name, photoURL, email, password) => {
    setLoading(true);
    try {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        try {
          await updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
          });

          setUser({
            ...user,
            displayName: name,
            photoURL: photoURL,
          });
          return user;
        } catch (error) {
          throw new Error("Error updating profile: " + error.message);
        }
      } catch (error_1) {
        throw new Error("Error creating user: " + error_1.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    login,
    googleLogin,
    logout,
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscrib();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
