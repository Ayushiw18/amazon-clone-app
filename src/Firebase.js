// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA07mlEY070SyOK-mgIX8kHpkoPJiKq_AA",
    authDomain: "clone-ffd95.firebaseapp.com",
    databaseURL: "https://clone-ffd95-default-rtdb.firebaseio.com",
    projectId: "clone-ffd95",
    storageBucket: "clone-ffd95.firebasestorage.app",
    messagingSenderId: "703608714826",
    appId: "1:703608714826:web:79a9f865ff8898804798b3",
    measurementId: "G-5V51D78CD0"
    
  };
  const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
console.log(auth);

export { db, auth, };