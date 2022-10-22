/*
    -----------------------
    Basic Context API Setup
    -----------------------
    1. Context API: Share auth state with other components (across the application)
    2. Create an UserContext
    3. ContextProvider with pass children
    4. Set the userContext in the index.js
    5. To consume the context: export the AuthContext from UserContext
    6. Now at Header or Home () or anywhere else): use UseContext hook to get the info in the context
    7. 
*/

/*
    -------------------
    Auth Integration
    -------------------
    1. Use getAuth by passing the app from firebase config
    2. Create a function name CreateUser to return CreateUserWithEmailAndPassword

*/