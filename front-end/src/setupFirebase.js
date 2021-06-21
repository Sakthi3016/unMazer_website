import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

// create a web app in fireabse 
// then get your app config object from firebase console -> settings
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACSeDvyjiCw1QHRh0V61xXCtIXrp2iGUo",
  authDomain: "analytics-f52a0.firebaseapp.com",
  projectId: "analytics-f52a0",
  storageBucket: "analytics-f52a0.appspot.com",
  messagingSenderId: "409788917000",
  appId: "1:409788917000:web:b889625c7e526b5ae2f8bd",
  measurementId: "G-HL71ZN5J3E"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;