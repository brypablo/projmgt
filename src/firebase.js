import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_srZyrj0julF4G2GcnHEFYOPZU8FzbAQ",
  authDomain: "project-management-pdf.firebaseapp.com",
  projectId: "project-management-pdf",
  storageBucket: "project-management-pdf.appspot.com",
  messagingSenderId: "798569515673",
  appId: "1:798569515673:web:bfb2b866d1cf0744ff8608",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
