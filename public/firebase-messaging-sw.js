importScripts('/__/firebase/7.23.0/firebase-app.js');
importScripts('/__/firebase/7.23.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBmRUlL3F07T7UphDgrXlNqN0SNCYB0u7w",
    authDomain: "hellopwa-71c3f.firebaseapp.com",
    databaseURL: "https://hellopwa-71c3f.firebaseio.com",
    projectId: "hellopwa-71c3f",
    storageBucket: "hellopwa-71c3f.appspot.com",
    messagingSenderId: "718191723887",
    appId: "1:718191723887:web:49ecfcb289a18d67c3549a"
  };

  firebaseConfig.init(firebaseConfig)
  firebase.messaging();