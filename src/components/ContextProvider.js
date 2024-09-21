import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { toast } from "react-toastify";
export const context = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      window.location.href='/';
    } catch (error) {
      console.log(error);
      toast.error("Login error, Please try again.");
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
      window.location.href='/Login';
      toast.success("Logout Sucessfull");
    } catch (error) {
      toast.error("Logout Error");
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const value = {
    user,
    login,
    logOut,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
