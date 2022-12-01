import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";
import { setUser } from "../redux/google-slice";
import { firebaseConfig } from "./firebaseConfig";


const firebaseConfig = {
  apiKey: "AIzaSyBw6omUq-xqkj4NWtZchDTCqZolxyJf-f4",
  authDomain: "anime-beta-75ce4.firebaseapp.com",
  databaseURL: "https://anime-beta-75ce4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anime-beta-75ce4",
  storageBucket: "anime-beta-75ce4.appspot.com",
  messagingSenderId: "7065378517",
  appId: "1:7065378517:web:59e880df0e723153ca8c5c",
  measurementId: "G-M86V52CF1Q"
};

const envValue = process.env.REACT_APP_FIREBASE_CONFIG;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = (dispatch) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setUser(user));
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

export const SignInAnonymously = (dispatch) => {
  signInAnonymously(auth)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setUser(user));
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};
