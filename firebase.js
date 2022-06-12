// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUYvdKMwSgiAyztuexPT9W2RtTT1UK13c",
  authDomain: "local-market-d579a.firebaseapp.com",
  projectId: "local-market-d579a",
  storageBucket: "local-market-d579a.appspot.com",
  messagingSenderId: "844564285358",
  appId: "1:844564285358:web:044d3b62b2ca7611316a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);