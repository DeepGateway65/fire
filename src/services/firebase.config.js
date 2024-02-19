import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  // apiKey: "AIzaSyC5u80wO6iaPl8E9auM0IRXliYGKyDQHfU",
  // authDomain: "todo-b74fc.firebaseapp.com",
  // projectId: "todo-b74fc",
  // storageBucket: "todo-b74fc.appspot.com",
  // messagingSenderId: "872116099545",
  // appId: "1:872116099545:web:9bb66d12ca15f2f39521c8"
  apiKey: "AIzaSyDxyCz8sG4VOQmcNaUkIPpxPJvI8YL4fPg",
  authDomain: "fir-crud-f53a7.firebaseapp.com",
  projectId: "fir-crud-f53a7",
  storageBucket: "fir-crud-f53a7.appspot.com",
  messagingSenderId: "698806670463",
  appId: "1:698806670463:web:5e06c1ce0ace7a0a7adb4a",
  measurementId: "G-F4LH4EWXX5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);