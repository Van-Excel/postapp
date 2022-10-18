// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw99Tnc4W7tGADUR3k86aJDa8jaCnAOmQ",
  authDomain: "postapp-project-4d870.firebaseapp.com",
  projectId: "postapp-project-4d870",
  storageBucket: "postapp-project-4d870.appspot.com",
  messagingSenderId: "672965943726",
  appId: "1:672965943726:web:6c8f0bf4eba721ed95283f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();