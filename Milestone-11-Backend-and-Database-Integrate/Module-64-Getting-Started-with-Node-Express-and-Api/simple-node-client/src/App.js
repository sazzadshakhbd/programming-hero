import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  const handelAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { email, name };
    console.log(user);
    event.target.reset();

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers)
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <form onSubmit={handelAddUser}>
        <input type="text" name="name" placeholder="name" />
        <br></br>
        <input type="email" name="email" placeholder="email" />
        <br></br>
        <button type="submit">Add User</button>
      </form>
      <h1>Users: {users.length}</h1>
      {
        users.map(user => <p key={user.id}><strong>User Name:</strong> {user.name}, <strong>User Email:</strong> {user.email}</p>)
      }
    </div>
  );
}

export default App;
