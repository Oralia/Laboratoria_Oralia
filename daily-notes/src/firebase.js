import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBeC-INViPwcdzeSkVRqkRav4rzaYx1Fug",
  authDomain: "daily-notes-1e363.firebaseapp.com",
  databaseURL: "https://daily-notes-1e363.firebaseio.com",
  projectId: "daily-notes-1e363",
  storageBucket: "daily-notes-1e363.appspot.com",
  messagingSenderId: "974730543993",
  appId: "1:974730543993:web:909fca3baac02ce544e5a8",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
