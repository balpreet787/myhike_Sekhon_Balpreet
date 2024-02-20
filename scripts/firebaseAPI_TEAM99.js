//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDamVotzrIlPjLOvKdPZhd23zqubahUBwQ",
    authDomain: "comp1800-c51af.firebaseapp.com",
    projectId: "comp1800-c51af",
    storageBucket: "comp1800-c51af.appspot.com",
    messagingSenderId: "298421369476",
    appId: "1:298421369476:web:b0a90465f2a1c1b2d720d1"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
