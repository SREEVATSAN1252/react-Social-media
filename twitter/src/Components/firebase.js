import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXdc0vUqlrk2nFkT9asNCzmJRue_ICqDQ",
    authDomain: "react-social-media-1504f.firebaseapp.com",
    projectId: "react-social-media-1504f",
    storageBucket: "react-social-media-1504f.appspot.com",
    messagingSenderId: "40540388583",
    appId: "1:40540388583:web:94da6b666d1bb1290f7642",
    measurementId: "G-L74QZGQJRT"
  };




// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db