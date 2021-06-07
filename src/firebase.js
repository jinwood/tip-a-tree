import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_9zwt9HTNGi8V02onNduvnJ-owojpLYQ",
  authDomain: "tip-a-tree.firebaseapp.com",
  projectId: "tip-a-tree",
  storageBucket: "tip-a-tree.appspot.com",
  messagingSenderId: "440600511784",
  appId: "1:440600511784:web:544f9090b5ce73cc39bc1d",
  measurementId: "G-JDG7GWWGLP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
