import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmRUlL3F07T7UphDgrXlNqN0SNCYB0u7w",
    authDomain: "hellopwa-71c3f.firebaseapp.com",
    databaseURL: "https://hellopwa-71c3f.firebaseio.com",
    projectId: "hellopwa-71c3f",
    storageBucket: "hellopwa-71c3f.appspot.com",
    messagingSenderId: "718191723887",
    appId: "1:718191723887:web:49ecfcb289a18d67c3549a"
};

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                    console.log('No Instance ID token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
        }
    })
}
