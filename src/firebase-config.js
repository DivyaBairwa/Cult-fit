import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcrtqFr_9-pjJEmdi6U4Mj5mnOfCY6O00",
  authDomain: "cult-fit-3cb1c.firebaseapp.com",
  projectId: "cult-fit-3cb1c",
  storageBucket: "cult-fit-3cb1c.appspot.com",
  messagingSenderId: "221774950253",
  appId: "1:221774950253:web:59b9957982f02f324f7464",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
