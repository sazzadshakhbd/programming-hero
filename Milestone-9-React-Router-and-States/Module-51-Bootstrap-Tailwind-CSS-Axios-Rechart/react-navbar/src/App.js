import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
