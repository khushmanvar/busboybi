const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "YOURFIREBASEID",
    authDomain: "YOURFIREBASEID",
    projectId: "YOURFIREBASEID",
    storageBucket: "YOURFIREBASEID",
    messagingSenderId: "YOURFIREBASEID",
    appId: "YOURFIREBASEID",
    measurementId: "YOURFIREBASEID"
};

firebase.initializeApp(firebaseConfig);

module.exports = { firebase };