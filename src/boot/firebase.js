import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyAprerqxFAC_f72AdrWFmMO7BpyjrcCqpg",
  authDomain: "quasar-todo-app.firebaseapp.com",
  databaseURL: "https://quasar-todo-app.firebaseio.com",
  projectId: "quasar-todo-app",
  storageBucket: "",
  messagingSenderId: "688094371877",
  appId: "1:688094371877:web:fa2415135525fc0f691fcc",
  measurementId: "G-8LGF4BMTY9"
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }