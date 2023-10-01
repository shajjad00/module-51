// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYj7o6ppXdolUuADdz8sfi7VfKI-rgqV0",
  authDomain: "integration-of-auth-and-react.firebaseapp.com",
  projectId: "integration-of-auth-and-react",
  storageBucket: "integration-of-auth-and-react.appspot.com",
  messagingSenderId: "1096106129081",
  appId: "1:1096106129081:web:7f8e629f15cfdd0743cd68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
