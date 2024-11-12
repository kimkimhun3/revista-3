// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbhKxwhZFGVoTDw3qF301LZZgcwXNT2HU",
  authDomain: "realm-5acf4.firebaseapp.com",
  projectId: "realm-5acf4",
  storageBucket: "realm-5acf4.firebasestorage.app",
  messagingSenderId: "92930222172",
  appId: "1:92930222172:web:380cd3bf73f13fe17f1e99",
  measurementId: "G-F3KQ42560J"
};

// Initialize Firebase
// Initialize Firebase
let analytics;
if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { analytics };