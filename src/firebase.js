// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq6J937vAaDwr1JDTMHHrJNcZVyZZRsL4",
  authDomain: "todo-app-24f65.firebaseapp.com",
  projectId: "todo-app-24f65",
  storageBucket: "todo-app-24f65.appspot.com",
  messagingSenderId: "420354704214",
  appId: "1:420354704214:web:eca7680c8d7593af7a0cf7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)