import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4FWLSUFfuTSvO840_sYgP5qR06sw5GXE",
  authDomain: "edugate-9e7d4.firebaseapp.com",
  projectId: "edugate-9e7d4",
  storageBucket: "edugate-9e7d4.appspot.com",
  messagingSenderId: "1010926579648",
  appId: "1:1010926579648:web:6d98553e4b67b4e3de6225",
};
// console.log(process.env.FIREBASE_API_KEY);
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
