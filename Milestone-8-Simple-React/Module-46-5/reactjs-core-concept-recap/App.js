import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Rajbari" bivag="Dhaka"></District>
      <District name="Kustia" bivag="Rajsahai"></District>
      <District name="Manikgang" bivag="Dhaka"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'teal',
  color: 'White',
  padding: '10px',
  margin: '10px'
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }

  return (
    <div className='district' style={districtStyle}>
      <h2>District: {props.name}</h2>
      <p>Division: {props.bivag} </p>
      <p>Power: {power}</p>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}

function LoadPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h2>Total Post Length: {posts.length} </h2>
      {
        posts.map(post => <Post key={post.id} title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
const postStyle = {
  backgroundColor: 'tomato',
  padding: '10px',
  margin: '10px',
  border: '5px solid tomato',
}
function Post(props) {
  return (
    <div style={postStyle}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
