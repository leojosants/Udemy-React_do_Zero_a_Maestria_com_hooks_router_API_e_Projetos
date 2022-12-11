// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCy1ML0stDwGjNQhyhJtAMXFWgkhc49Ff0",

    authDomain: "miniblog-c965a.firebaseapp.com",

    projectId: "miniblog-c965a",

    storageBucket: "miniblog-c965a.appspot.com",

    messagingSenderId: "505691974525",

    appId: "1:505691974525:web:8abac6474fc6e43c5f7a14"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };