import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAMwm0sD22day1ltPuZ9NDWXi7yYlu5s0E",
    authDomain: "voting-app-d996a.firebaseapp.com",
    databaseURL: "https://voting-app-d996a-default-rtdb.firebaseio.com",
    projectId: "voting-app-d996a",
    storageBucket: "voting-app-d996a.appspot.com",
    messagingSenderId: "489657984400",
    appId: "1:489657984400:web:0adcaee5152f2ce0ad7f15"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();