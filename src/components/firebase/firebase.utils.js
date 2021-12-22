import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBAJ1ujKBJO6UpHmYCeSMZ3KJ822-1pLlU",
  authDomain: "crwn-db-9ac37.firebaseapp.com",
  projectId: "crwn-db-9ac37",
  storageBucket: "crwn-db-9ac37.appspot.com",
  messagingSenderId: "1001598787739",
  appId: "1:1001598787739:web:bb2e72a309003ff5fd663e",
  measurementId: "G-HF4HSZT6LC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
