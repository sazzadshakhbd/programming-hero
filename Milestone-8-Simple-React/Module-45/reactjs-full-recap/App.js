import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <br></br>
      <LoadComment></LoadComment>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}


function LoadComment() {
  const [comments, setComment] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComment(data))
  }, []);

  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div>
      <h3>Email: {props.email}</h3>
      <p>Details: {props.body}</p>
    </div>
  )
}



export default App;
