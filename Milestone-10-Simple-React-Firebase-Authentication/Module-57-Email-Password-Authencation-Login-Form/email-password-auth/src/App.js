import './App.css';

import { getAuth } from 'firebase/auth';
import app from './firebase/firebase.init';

const auth = getAuth(app);

const handlerOnSubmit = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password)
}
const onChangeEmailHandler = (event) => {
  console.log(event.target.value)
}
const onChangePasswordHandler = (event) => {
  console.log(event.target.value);
}
function App() {
  return (
    <div className="App">
      <form onSubmit={handlerOnSubmit}>
        <input onBlur={onChangeEmailHandler} type="email" name="email" id="" placeholder='Your Email' />
        <br></br>
        <input onBlur={onChangePasswordHandler} type="password" name="password" id="" placeholder='Your Password' />
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
