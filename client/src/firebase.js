// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-100.firebaseapp.com",
  projectId: "real-estate-100",
  storageBucket: "real-estate-100.appspot.com",
  messagingSenderId: "94638859831",
  appId: "1:94638859831:web:43472e3b841bfe784e01b2",
  measurementId: "G-DSPH39Q4WS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);