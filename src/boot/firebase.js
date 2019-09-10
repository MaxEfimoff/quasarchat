import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWmIk0zh5TklJ10Ps4hxzlvYVCbKaCFMU",
  authDomain: "quasarchat.firebaseapp.com",
  databaseURL: "https://quasarchat.firebaseio.com",
  projectId: "quasarchat",
  storageBucket: "",
  messagingSenderId: "708148696049",
  appId: "1:708148696049:web:8d618e7f13d25c2ef22a50"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebaseApp.auth();

const firebaseDb = firebaseApp.database();

export {
  firebaseAuth, firebaseDb
}