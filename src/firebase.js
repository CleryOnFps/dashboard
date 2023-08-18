// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSCN7ov5OfhhmGBV1bTwx5cnejM7MUUfU",
  authDomain: "dash-408df.firebaseapp.com",
  projectId: "dash-408df",
  storageBucket: "dash-408df.appspot.com",
  messagingSenderId: "204266402635",
  appId: "1:204266402635:web:66a04241b49ad0e769eece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app) 
export default app 