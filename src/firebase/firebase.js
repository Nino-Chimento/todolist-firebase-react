import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/functions";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAn9Lji5tjO73U0y2FZOVxeJX4Z8O7nilA",
  authDomain: "todolist-dcd79.firebaseapp.com",
  projectId: "todolist-dcd79",
  storageBucket: "todolist-dcd79.appspot.com",
  messagingSenderId: "875922002755",
  appId: "1:875922002755:web:6b9cc92482bc5ccfd115f6",
};
// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB;
