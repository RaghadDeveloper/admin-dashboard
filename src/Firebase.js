// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI2JGQ0WtJ-m0TI6EM7BySwXx-0HAEsx4",
  authDomain: "admin-project-5fa8f.firebaseapp.com",
  projectId: "admin-project-5fa8f",
  storageBucket: "admin-project-5fa8f.firebasestorage.app",
  messagingSenderId: "681129580540",
  appId: "1:681129580540:web:b9af09bc9c1e17527cc479",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
