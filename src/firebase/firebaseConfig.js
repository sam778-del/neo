import firebase from 'firebase/app'

// Initialize Firebase
var config = {
   apiKey: "AIzaSyAki6lvFTReT99ftPfCaFEMPXCaTJJIl-0",
   authDomain: "jovial-admin.firebaseapp.com",
   databaseURL: "https://jovial-admin.firebaseio.com",
   projectId: "jovial-admin",
   storageBucket: "jovial-admin.appspot.com",
   messagingSenderId: "414316250387"
};

firebase.initializeApp(config);