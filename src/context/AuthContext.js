// Step 1
import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

//step 2

const UserContext = createContext();

//step 3
// { children }  means when we gone use it in app.js every other tag inside are called children

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
  
    // for creating new user
    const createUser = (email, password, e) => {
      
      // creating a new database where userLogin is the database name and email id is the document name out of many in userLogin database
      setDoc(doc(db, 'userLogin', email), {
        savedShows: [],
        likeStatus: [],
        userName: e
      })
      return createUserWithEmailAndPassword(auth, email, password);
    };

    // for sigin the user by authenticating from user db
    const signIn = (email, password) =>  {
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    // logout the current logged in user
    const logout = () => {
        return signOut(auth)
    }
  
    // runs first when page load and then when user logout
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser, "1");
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <UserContext.Provider value={{ createUser, user, logout, signIn}}>
        {children}
      </UserContext.Provider>
    );
};
  
export const UserAuth = () => {
    return useContext(UserContext);
};
  
