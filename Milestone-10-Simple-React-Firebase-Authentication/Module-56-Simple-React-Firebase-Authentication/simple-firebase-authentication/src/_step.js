/*
    INITIAL SETUP
    ---------------
    1. Visit: console.firebase.google.com
    2. Create a new firebase project
    3. Visit doc (go to docs): Build > Authentication > web > getting started
    4. Register web app > firebase project home > click web > give name and register
    5. Install firebase on your project
    6. DANGEROUS: get firebase config and put it in firebase.init.js
    7. export app from firebase.init.js
    --------------------
    SETUP AUTH PROVIDER
    --------------------
    8. Create auth using getAuth from firebase by using app from firebase.init.js
    9. Create a google auth provider.  do not forget to use new GoogleAuthProvider();
    10. go to firebase > Build > Authentication > Sign in Method
    11. Enable google sign in method
    12. Create a button for google sing in method with a click handler
    13. Inside the event handler, call signInWithPopUp with auth, provider
    14. After signInWithPopUp .then result, error
     --------------------
    DISPLAY DATA
    ---------------------

    ADD A NEW SIGN_IN METHOD
    ------------------------
    1. Enable the sign in method
    2. Create github, twitter, fb etc,
    3. Get client id, secret
*/