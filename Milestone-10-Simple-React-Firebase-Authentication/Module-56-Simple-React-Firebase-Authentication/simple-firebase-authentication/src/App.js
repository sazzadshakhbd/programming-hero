import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const handlerSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  };
  const handlerSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }
  const handlerGithub = () => {
    signInWithPopup(auth, GithubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error ', error)
      })
  }
  const handelFacebook = () => {
    signInWithPopup(auth, FacebookProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error ', error)
      })
  }
  return (
    <div className="App">

      {user.uid ?
        <button onClick={handlerSignOut}>SignOut</button>
        :
        <>
          <button onClick={handlerSignIn}>Google SignIn</button>
          <button onClick={handlerGithub}>Github SignIn</button>
          <button onClick={handelFacebook}>Facebook SignIn</button>
        </>
      }
      {user.uid &&
        <div>
          <h3>USERNAME: {user.displayName}</h3>
          <h4>USEREMAIL: {user.email}</h4>
          <img src={user.photoURL} alt=""></img>
        </div>}
    </div>
  );
}

export default App;
