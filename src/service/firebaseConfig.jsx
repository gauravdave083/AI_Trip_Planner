// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyCKH5bHr0lJsbaT4Q2rNxHrFATf3cEgw68",
     authDomain: "ai-trip-planner-b2b09.firebaseapp.com",
     projectId: "ai-trip-planner-b2b09",
     storageBucket: "ai-trip-planner-b2b09.firebasestorage.app",
     messagingSenderId: "813663680202",
     appId: "1:813663680202:web:0615a6fa9cdce7535ba633",
     measurementId: "G-C67ZNDET70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);