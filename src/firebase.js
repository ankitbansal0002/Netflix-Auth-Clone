import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASl3-yDu6hkE153SgKbfP_-N5s5bNL6Xg",
  authDomain: "netflix-2022-f43bf.firebaseapp.com",
  projectId: "netflix-2022-f43bf",
  storageBucket: "netflix-2022-f43bf.appspot.com",
  messagingSenderId: "380660425178",
  appId: "1:380660425178:web:d2db4cc607e4c81f8f20e3",
  measurementId: "G-SWT74W1ENN"
};

  // const firebaseApp = firebase.initializeApp(firebaseConfig);  // creating a firebase query
  // const db = firebaseApp.firestore();   // creating a database
  // const auth = firebase.auth();     // authentication 

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);


  // export { auth };
  // export default db;