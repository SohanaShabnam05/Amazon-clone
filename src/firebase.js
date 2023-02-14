// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optionalimport fire
//import firebase from "./firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCP0unRJZ6oV9_d7nB95-qP7z7vFGwZfJk",
  authDomain: "challenge-2adce.firebaseapp.com",
  projectId: "challenge-2adce",
  storageBucket: "challenge-2adce.appspot.com",
  messagingSenderId: "860049137568",
  appId: "1:860049137568:web:120dc05fbf53176ef2cec5",
  measurementId: "G-CPFCD0TYZ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
//export default firebase;
