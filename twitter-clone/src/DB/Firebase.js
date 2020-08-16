import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA---xxwpVVCA7gRJ7P6t_rHivZJHHvZ2k",
  authDomain: "ivory-period-231310.firebaseapp.com",
  databaseURL: "https://ivory-period-231310.firebaseio.com",
  projectId: "ivory-period-231310",
  storageBucket: "ivory-period-231310.appspot.com",
  messagingSenderId: "1090831669262",
  appId: "1:1090831669262:web:09e9f3351304e031bbc45f",
  measurementId: "G-R3W6NJX3ME",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
