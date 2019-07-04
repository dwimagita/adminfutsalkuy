import * as admin from 'firebase-admin';

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://futsalkuy-c832c.firebaseio.com"
})

admin.auth().verifyIdToken(idToken)
    .then(function (decodedToken) {
        let uid = decodedToken.uid;
        // ...
        console.log(uid)
    }).catch(function (error) {
        // Handle error
    });