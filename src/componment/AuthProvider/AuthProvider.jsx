import React, { createContext, useState, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../../firebase/";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email/password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (createdUser) => {
        setUser(createdUser.user);
        return createdUser;
      }
    );
  };

  // Sign in with email/password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    return signInWithRedirect(auth, provider);
  };

  // GitHub Login
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();

    return signInWithRedirect(auth, provider);
  };

  // Update user profile
  const updateUser = (name, photo) => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return Promise.resolve();
    }

    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Check redirect login result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("Redirect login successful:", result.user);
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect login error:", error);
      });
  }, []);

  // Firebase authentication state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    logOut,
    updateUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;