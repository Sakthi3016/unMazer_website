import firebase from 'firebase';
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCZcuP-3JrLHR013Fva0CMhNuW6dCk8bXI",
    authDomain: "newsletter-demo-670bc.firebaseapp.com",
    projectId: "newsletter-demo-670bc",
    storageBucket: "newsletter-demo-670bc.appspot.com",
    messagingSenderId: "892837153450",
    appId: "1:892837153450:web:5b35d86f2c463708749ed3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig,'newsletter-demo');
  //newsletter-demo is project name i created in firebase
  const db=firebaseApp.firestore();
  export default db;