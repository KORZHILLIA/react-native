import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Wd9ki4G0dUSCfDMgC2rqSA6WPi6SwQk",
  authDomain: "neat-tempo-367215.firebaseapp.com",
  projectId: "neat-tempo-367215",
  firebase_url:
    "https://neat-tempo-367215-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "neat-tempo-367215.appspot.com",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
