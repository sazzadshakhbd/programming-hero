import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const handelGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }
  return (
    <div className="App">
      {user.uid ?
        <button onClick={handelSignOut}>Sign Out</button>
        :
        <button onClick={handelGoogleSignIn}>Google Sign In</button>
      }
      {
        user.uid && <div>
          <h1>Username: {user.displayName}</h1>
          <h2>Email: {user.email}</h2>
          <img src={user.photoURL} alt=""></img>
        </div>
      }
    </div>
  );
}

export default App;
