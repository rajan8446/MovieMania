import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADq35J7V6RxyUdaM7Y_qEuFlGhUn1acWU",
    authDomain: "rkmania-cf7c3.firebaseapp.com",
    projectId: "rkmania-cf7c3",
    storageBucket: "rkmania-cf7c3.appspot.com",
    messagingSenderId: "818539490341",
    appId: "1:818539490341:web:1b4a07af70e146e561e3cc"
  };

const firebaseapp =firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}