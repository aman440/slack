// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// if
//           request.time < timestamp.date(2021, 8, 23);

import firebase from 'firebase';
// import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDaz8PaSyDjRG8-2de3I6zHrWzcMIiY8e0",
    authDomain: "slack-bcf0f.firebaseapp.com",
    projectId: "slack-bcf0f",
    storageBucket: "slack-bcf0f.appspot.com",
    messagingSenderId: "261820938860",
    appId: "1:261820938860:web:8619846547ceaeaee6b649",
    measurementId: "G-8C27P2EX6P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};

  