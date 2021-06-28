import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAfTlEwcQZXp4n3W2qXMCv1iutEvcvEFqU",
  authDomain: "login-80ba4.firebaseapp.com",
  databaseURL: "https://login-80ba4.firebase.com",
  projectId: "login-80ba4",
  storageBucket: "login-80ba4.appspot.com",
  messagingSenderId: "408654955061",
  appId: "1:408654955061:web:edc81c2aac24df20ad677c",
};
 
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };