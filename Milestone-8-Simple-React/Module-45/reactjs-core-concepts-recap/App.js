
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers> </ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}
function User(props) {
  return (
    <div style={{ border: '2px solid teal', margin: '20px' }}>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  );

}

function Counter() {
  const [count, setCount] = useState(22);

  // console.log(abc)

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1)

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}


export default App;





/* 
<Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="35000"></Product>
{
  products.map(product => <Product name={product.name} price={product.price}></Product>)
} 


const products = [
  { name: 'Laptop', price: 153000 },
  { name: 'Phone', price: 40000 },
  { name: 'Watch', price: 5000 },
  { name: 'Tablet', price: 3000 },
]

<div className='product'>
  <h3>Name: {props.name}</h3>
  <p>Price: {props.price}</p>
</div>
*/

