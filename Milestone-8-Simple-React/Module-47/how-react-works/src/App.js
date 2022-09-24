import './App.css';
import Device from './components/Device';
import DeviceDetails from './components/DeviceDetails';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="phone"></Device>
      <DeviceDetails price="30000"></DeviceDetails>
      <Watch></Watch>
    </div>
  );
}

export default App;
