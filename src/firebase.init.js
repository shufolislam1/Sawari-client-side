// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRb3vmEY0lpX9tTTQGkz7wj2Qo5IOmOCk",
  authDomain: "assignment-11-fe9a2.firebaseapp.com",
  projectId: "assignment-11-fe9a2",
  storageBucket: "assignment-11-fe9a2.appspot.com",
  messagingSenderId: "788503044067",
  appId: "1:788503044067:web:6d8f22e1efd74ada804ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;