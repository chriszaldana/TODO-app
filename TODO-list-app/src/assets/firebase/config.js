// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy1dzmTRMT7ICHUW2QJD5UtrnrUAH2jlk",
  authDomain: "todo-list-ff519.firebaseapp.com",
  projectId: "todo-list-ff519",
  storageBucket: "todo-list-ff519.appspot.com",
  messagingSenderId: "939622429839",
  appId: "1:939622429839:web:de87a0793b03d1cbd0ecfa"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase