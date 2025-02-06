// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8XxfNKjAd6-EP4NS_Za-LpnRxmsmq5qA",
  authDomain: "aiscoutx.firebaseapp.com",
  projectId: "aiscoutx",
  storageBucket: "aiscoutx.firebasestorage.app",
  messagingSenderId: "296370253543",
  appId: "1:296370253543:web:5896903a98d41a066dfc42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}