
(function(){

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();



    // Get authentication elements
    const userEmail = document.getElementById('user');
    const pass = document.getElementById('pass');
    const btnLogin = document.getElementById('Login');
    
    
    // Add login event
    btnLogin.addEventListener('click', e=>
        {
            // Get email and pass
            const email = userEmail.value;
            const pass = pass.value;
            const auth = firebase.auth();

            // Sign in
            const promise = auth.signInWithEmailAndPass(email,pass);
            promise.catch(e => console.log(e.message));
        });

    // Add a realtime listener to keep checking authentication
    firebase.auth().onAuthStateChanged(firebaseUser =>
        {
            if(firebaseUser)
            {
                console.log(firebaseUser);
            }
            else
            {
                console.log('not logged in');
            }
        });
}());
