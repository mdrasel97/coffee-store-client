// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC9ZzSqfugQA1TUWv0t02qm5u1EtYSedc",
  authDomain: "fir-auth-practice-d568c.firebaseapp.com",
  projectId: "fir-auth-practice-d568c",
  storageBucket: "fir-auth-practice-d568c.firebasestorage.app",
  messagingSenderId: "1085206519120",
  appId: "1:1085206519120:web:5c7f9b53ec747987af6055",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
