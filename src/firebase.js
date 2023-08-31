// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH2UZIYaYsCu4Fio-LmDCOOgoRUIkNIj8",
  authDomain: "todo-react-149e9.firebaseapp.com",
  projectId: "todo-react-149e9",
  storageBucket: "todo-react-149e9.appspot.com",
  messagingSenderId: "418802911119",
  appId: "1:418802911119:web:d7ab00094f77f875602dfa"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)