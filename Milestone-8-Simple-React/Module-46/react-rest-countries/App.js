// import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
// import Header from './components/Header/Header';
// import Person from './components/Person/Person';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      {/*
      <Person></Person>
      <Header></Header> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}





// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Visiting Every Countries of the World!</h1>
//       <h2>Countries of Length: {countries.length}</h2>
//       {
//         // countries.map(country => <p>{country.name.common}</p>)
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h3>Country Name: {props.name}</h3>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }
export default App;
