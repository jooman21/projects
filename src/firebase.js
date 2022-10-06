// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDMj-xXC6D_UFEZZtUcyLTeq-LvWwEVtlg",
    authDomain: "netflix-clone-2ff65.firebaseapp.com",
    projectId: "netflix-clone-2ff65",
    storageBucket: "netflix-clone-2ff65.appspot.com",
    messagingSenderId: "637773801447",
    appId: "1:637773801447:web:e51cc518b7a1be53847f42",
    measurementId: "G-13V2VJX5KM"
  };

  initializeApp(firebaseConfig);
  export const db = getFirestore();
 