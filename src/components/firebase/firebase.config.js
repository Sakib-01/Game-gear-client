// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxGSAoUwhDsPoOa0HidwPC5AyfWHhcWBA",
  authDomain: "sports-shop-9446e.firebaseapp.com",
  projectId: "sports-shop-9446e",
  storageBucket: "sports-shop-9446e.firebasestorage.app",
  messagingSenderId: "274063067841",
  appId: "1:274063067841:web:d98adb84dff75e962be240",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
