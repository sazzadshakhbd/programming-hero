import logo from './logo.svg';
import './App.css';

const number = 555;
const person = {
  name: 'sazzad',
  age: 40
}
const student = {
  fee: 2000,
  location: 'Dhaka'
}

const studentStyle = {
  color: 'teal',
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '4px',
  fontWeight: 'bold'
}

function App() {
  const names = ['sazzad', 'adib', 'adiba', 'marjia', 'maa']
  const students = [
    { fee: 2000, location: 'Dhaka' },
    { fee: 3000, location: 'Rajshahi' },
    { fee: 4000, location: 'Khulna' },
    { fee: 5000, location: 'Borishal' },
  ]
  return (
    <div className="App">
      {
        students.map(student => <Person fee={student.fee} location={student.location}></Person>)
      }
      {/* {
        names.map(allname => <li>{allname}</li>)
      } */}

      {/* {
        names.map(allName => <Person name={allName}></Person>)
      } */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello, Sazzad</h3>
        </div>
        <div className="music">
          <p>Name: {number + 22}</p>
          <p style={{
            color: '#fff', backgroundColor: 'tomato', padding: '1rem',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>Name: {person.name}, Age: {person.age}</p>
          <p style={studentStyle}>Semister Fee: {student.fee}, Location: {student.location}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}




      {/* <Person name="sazzad" job="FrontEndDevelpoer"></Person>
      <Person name="adib" job="Alem"></Person>
      <Person name="adiba" job="Software Developer"></Person>
      <Person name={names[3]} job="Housewife"></Person>
      <Person name={names[4]} job="Main Person"></Person> */}
      <h4>New Content</h4>
      <Friend name="Faysal"></Friend>
      <Friend name="jakaria"></Friend>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum labore assumenda debitis adipisci dolores nisi quos commodi accusantium. Ea placeat debitis error excepturi quod dolorem ab, consequuntur explicabo ipsa unde?</p>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h1>{props.fee}</h1>
      <h2>{props.location}</h2>
      {/* <p>Profession: {props.job}</p> */}
    </div>
  )
}

function Friend() {
  return (
    <div className='container'>
      <h3>Friends Name: Adib</h3>
      <p>Job: Jobless</p>
    </div>
  )
}

export default App;
