import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, child, remove } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPPfxtywJfwNPZWpjRzwKpgsxq8zRBz_Y",
  authDomain: "terminal-3-9ed78.firebaseapp.com",
  databaseURL:
    "https://terminal-3-9ed78-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "terminal-3-9ed78",
  storageBucket: "terminal-3-9ed78.appspot.com",
  messagingSenderId: "102238779622",
  appId: "1:102238779622:web:7204ca1557e3945ba0a327",
  measurementId: "G-N2XWX1SM91",
};
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);

const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export { analytics, getAuth };
