import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3S_3Ruf6cy2TzHYbkMgxzv5GW2lUH3x8",
    authDomain: "react--clone-c04bb.firebaseapp.com",
    databaseURL: "https://react--clone-c04bb.firebaseio.com",
    projectId: "react--clone-c04bb",
    storageBucket: "react--clone-c04bb.appspot.com",
    messagingSenderId: "1069371590719",
    appId: "1:1069371590719:web:2c5803275d7b646687d08a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };