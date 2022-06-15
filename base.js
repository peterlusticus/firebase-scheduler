import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBglnXCOAu9oq-aBSAtNwxjyJangzxkA0k",
    authDomain: "fir-scheduler-4266d.firebaseapp.com",
    databaseURL: "https://fir-scheduler-4266d-default-rtdb.firebaseio.com",
    projectId: "fir-scheduler-4266d",
    storageBucket: "fir-scheduler-4266d.appspot.com",
    messagingSenderId: "168776683929",
    appId: "1:168776683929:web:41ac7e9c44305fc8754308",
    measurementId: "G-K9CQVBJV8H"
};
const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export default app;
